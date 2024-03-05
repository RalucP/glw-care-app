import { describe, test, expect } from 'vitest';

import { call, takeLatest } from 'redux-saga/effects';
import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';

import { getCollectionAndDocuments } from '../../../utils/firebase';

import {
  fetchCategoriesAsync,
  onFetchCategories,
  categoriesSaga,
} from '../category.saga';
import CATEGORIES_ACTION_TYPES from '../category.types';
import { fetchCategoriesFailed, fetchCategoriesSuccess } from '../category.action';

describe('category sagas', () => {
  test('categoriesSaga', () => {
    testSaga(categoriesSaga)
      .next()
      .all([call(onFetchCategories)])
      .next()
      .isDone();
  });
  
  test('onFetchCategories should takeLatest FETCH_CATEGORIES_START and call fetchCategoriesAsync', () => {
    const gen = onFetchCategories()
  
    const result = gen.next()
    expect(result.value).toStrictEqual(takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync))
  
    const done = gen.next()
    expect(done.done).toBe(true);
  });

  test('fetchCategoriesAsync success', () => {
    const mockCategoriesArray = [
      {id: 1, name: 'Category 1'},
      {id: 2, name: 'Category 2'},
    ];

    return expectSaga(fetchCategoriesAsync)
      .provide([
        [call(getCollectionAndDocuments), mockCategoriesArray]
      ])
      .put(fetchCategoriesSuccess(mockCategoriesArray))
      .run();
  });

  test('fetchCategoriesAsync failure', () => {
    const mockError = new Error('Error fetching categories');

    return expectSaga(fetchCategoriesAsync)
      .provide([
        [call(getCollectionAndDocuments), throwError(mockError)]
      ])
      .put(fetchCategoriesFailed(mockError))
      .run();
  });
});