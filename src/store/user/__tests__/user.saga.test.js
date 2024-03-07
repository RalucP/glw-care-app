import { describe, test, expect } from "vitest";

import { call, takeLatest } from "redux-saga/effects";
import { expectSaga, testSaga } from "redux-saga-test-plan";
import { throwError } from "redux-saga-test-plan/providers";
import { 
  userSaga,
  onCheckUserSession,
  onGoogleSignInStart,
  onEmailSignInStart,
  onSignUpStart,
  onSignUpSuccess,
  onSignOutStart,
  signInWithGoogle,
  signInAfterSignUp,
  isUserAuthenticated,
  signInWithEmail,
  signUpStart,
  signOut,
  getSnapshotFromUserAuth
} from "../user.saga";
import USER_ACTION_TYPES from "../user.types";
import { signInFailed, signInSuccess, signOutFailed, signOutSuccess, signUpFailed, singUpSuccess } from "../user.action";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, getCurrentUser, signInAuthUserWithEmailAndPassword, signInWithGooglePopup, signOutUser } from "../../../utils/firebase";

describe('user saga tests', () => {
  test('userSaga', () => {
    testSaga(userSaga)
      .next()
      .all([
        call(onCheckUserSession), 
        call(onGoogleSignInStart), 
        call(onEmailSignInStart),
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onSignOutStart),
      ])
      .next()
      .isDone();
  });

  test('onGoogleSignInStart should takeLatest GOOGLE_SIGN_IN_START and call signInWithGoogle', () => {
    const gen = onGoogleSignInStart();

    const result = gen.next();
    expect(result.value).toStrictEqual(takeLatest(USER_ACTION_TYPES.GOGGLE_SIGN_IN_START, signInWithGoogle));

    const done = gen.next();
    expect(done.done).toBe(true);
  });

  test('onCheckUserSession saga should takeLatest CHECK_USER_SESSION and call isUserAuthenticated', () => {
    const gen = onCheckUserSession();

    const result = gen.next();
    expect(result.value).toStrictEqual(takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated));

    const done = gen.next();
    expect(done.done).toBe(true);
  });

  test('onEmailSignInStart saga should takeLatest EMAIL_SIGN_IN_START and call signInWithEmail', () => {
    const gen = onEmailSignInStart();

    const result = gen.next();
    expect(result.value).toStrictEqual(takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail));

    const done = gen.next();
    expect(done.done).toBe(true);
  });

  test('onSignUpStart saga should takeLatest SIGN_UP_START and call signUpStart', () => {
    const gen = onSignUpStart();

    const result = gen.next();
    expect(result.value).toStrictEqual(takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUpStart));

    const done = gen.next();
    expect(done.done).toBe(true);
  });

  test('onSignUpSuccess saga should takeLatest SIGN_UP_SUCCESS and call signInAfterSignUp', () => {
    const gen = onSignUpSuccess();

    const result = gen.next();
    expect(result.value).toStrictEqual(takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp));

    const done = gen.next();
    expect(done.done).toBe(true);
  });

  test('onSignOutStart saga should takeLatest SIGN_OUT_START and call signOut', () => {
    const gen = onSignOutStart();

    const result = gen.next();
    expect(result.value).toStrictEqual(takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut));

    const done = gen.next();
    expect(done.done).toBe(true);
  });

  test('signInAfterSignUp saga should call getSnapshotFromUserAuth and signIn', () => {
    const mockUser = { 
      id: 1, 
      name: 'test' 
    };

    const mockAdditionalDetails = { displayName: 'test' };

    const mockPayload = {
      user: mockUser,
      additionalDetails: mockAdditionalDetails,
    };

    testSaga(signInAfterSignUp, {
      payload: mockPayload,
    })
      .next()
      .call(getSnapshotFromUserAuth, mockUser, mockAdditionalDetails)
      .next()
      .isDone();
  });

  test('signOut saga success path should call signOutUser and put signOutSuccess if successfull', () => {
    return expectSaga(signOut)
      .provide([[call(signOutUser)]])
      .put(signOutSuccess())
      .run();
  });

  test('signOut saga error path should call signOutUser and put signOutFailed if failed', () => {
    const mockError = new Error('test error');

    return expectSaga(signOut)
      .provide([[call(signOutUser), throwError(mockError)]])
      .put(signOutFailed(mockError))
      .run();
  });

  test('signUpStart saga success path should call signInAfterSignUp and put signUpSuccess if successfull', () => {
    const mockEmail = 'test@example.com';
    const mockPassword = 'password123';
    const mockDisplayName = 'test';

    const mockUser = {
      displayName: mockDisplayName,
      email: mockEmail
    };

    const mockUserCredentials = { id: 1, user: mockUser };

    const mockPayload = {
      email: mockEmail,
      displayName: mockDisplayName,
      password: mockPassword
    }

    return expectSaga(signUpStart, { payload: mockPayload })
      .provide([
        [
          call(createAuthUserWithEmailAndPassword, mockEmail, mockPassword), 
          mockUserCredentials
        ]])
      .put(singUpSuccess(mockUserCredentials.user, { displayName: mockDisplayName }))
      .run();
  });

  test('signUpSuccess saga error path should call createAuthUserWithEmailAndPassword and put signUpFailure if failed', () => {
    const mockEmail = 'test@example.com';
    const mockPassword = 'password123';
    const mockError = new Error('Sign up failed');

    return expectSaga(signUpStart, { payload: {email: mockEmail, password: mockPassword} })
      .provide([
        [
          call(createAuthUserWithEmailAndPassword, mockEmail, mockPassword), 
          throwError(mockError)
        ]])
      .put(signUpFailed(mockError))
      .run();
  });

  test('isUserAuthenticated saga success path should call getSnapshotFromUserAuth and signIn if successfull', () => {
    const mockUser = { id: 1, email: 'test@example.com' };

    return expectSaga(isUserAuthenticated)
      .provide([[call(getCurrentUser), mockUser]])
      .call(getSnapshotFromUserAuth, mockUser)
      .run();
  });

  test('isUserAuthenticated saga error path should call getCurrentUser and put signInFailed if failed', () => {
    const mockError = new Error('isUserAuthenticated failed');

    return expectSaga(isUserAuthenticated)
      .provide([[call(getCurrentUser), throwError(mockError)]])
      .put(signInFailed(mockError))
      .run();
  });

  test('signInWithEmail saga success path should call signInAuthUserWithEmailAndPassword and call getSnapshotFromUserAuth', () => {
    const mockEmail = 'test@example.com';
    const mockPassword = 'password123';
    const mockUser = { id: 1, name: 'test', email: mockEmail };
    const mockUserCredential = { id: 1, user: mockUser };

    return expectSaga(signInWithEmail, { payload: {email: mockEmail, password: mockPassword }})
      .provide([[call(signInAuthUserWithEmailAndPassword, mockEmail, mockPassword), mockUserCredential]])
      .call(getSnapshotFromUserAuth, mockUser)
      .run();
  });

  test('signInWithEmail saga error path should call signInAuthUserWithEmailAndPassword and put signInFailed', () => {
    const mockEmail = 'test@example.com';
    const mockPassword = 'password123';
    const mockError = new Error('signInWithEmail failed');

    return expectSaga(signInWithEmail, { payload: {email: mockEmail, password: mockPassword }})
      .provide([[call(signInAuthUserWithEmailAndPassword, mockEmail, mockPassword), throwError(mockError)]])
      .put(signInFailed(mockError))
      .run();
  });

  test('signInWithGoogle saga success path should call signInWithGooglePopup and call getSnapshotFromUserAuth', () => {
    const mockUser = { id: 1, email: 'test@example.com' };
    const mockGoogleVal = { user: mockUser };

    return expectSaga(signInWithGoogle)
      .provide([[call(signInWithGooglePopup), mockGoogleVal]])
      .call(getSnapshotFromUserAuth, mockUser)
      .run();
  });

  test('signInWithGoogle saga error path should call signInWithGooglePopup and put signInFailed', () => {
    const mockError = new Error('signInWithGoogle failed');

    return expectSaga(signInWithGoogle)
      .provide([[call(signInWithGooglePopup), throwError(mockError)]])
      .put(signInFailed(mockError))
      .run();
  });

  test('getSnapshotFromUserAuth saga should call createUserDocumentFromAuth and put signInSuccess', () => {
    const mockUserAuth = { id: 1, email: 'test@example.com' };
    const mockAdditionalDetails = { displayName: 'test' };
    const mockUserSnapshot = { id: 2, data: () => ({ displayName: 'test' }) };

    return expectSaga(getSnapshotFromUserAuth, mockUserAuth, mockAdditionalDetails)
      .provide([[call(createUserDocumentFromAuth, mockUserAuth, mockAdditionalDetails), mockUserSnapshot]])
      .put(signInSuccess({ id: mockUserSnapshot.id, ...mockUserSnapshot.data() }))
      .run();
  });

  test('getSnapshotFromUserAuth saga should call createUserDocumentFromAuth and put signInFailed', () => {
    const mockUserAuth = { id: 1, email: 'test@example.com' };
    const mockAdditionalDetails = { displayName: 'test' };
    const mockError = new Error('getSnapshotFromUserAuth failed');

    return expectSaga(getSnapshotFromUserAuth, mockUserAuth, mockAdditionalDetails)
      .provide([[call(createUserDocumentFromAuth, mockUserAuth, mockAdditionalDetails), throwError(mockError)]])
      .put(signInFailed(mockError))
      .run();
  });
});