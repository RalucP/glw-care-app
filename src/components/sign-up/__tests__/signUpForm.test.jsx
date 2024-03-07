import { describe, test, expect, beforeEach, vi } from "vitest";
import { screen, fireEvent, cleanup } from "@testing-library/react";

import * as reactRedux from 'react-redux';

import SignUpForm from "../SignUpForm";
import { renderWithProvider } from "../../../utils/test/test.utils";
import { singUpStart } from "../../../store/user/user.action";
import { signUpStart } from "../../../store/user/user.saga";

vi.mock('react-redux', async () => {
  const mod = await vi.importActual('react-redux');

  return {
    ...mod, 
    useDispatch: vi.fn()
  }
});

describe('sign up form tests', () => {
  beforeEach(() => {
    cleanup();
  });

  test('should dispatch signUpStart when sign up button is clicked', async () => {
    const mockDispatch = vi.fn();

    vi.mocked(reactRedux.useDispatch).mockReturnValue(mockDispatch);

    renderWithProvider(<SignUpForm />, {
      preloadedState: {
        user: {
          currentUser: null
        }
      }
    });

    const displayNameInput = screen.getByLabelText(/display name/i);
    expect(displayNameInput).toBeTruthy();
    await fireEvent.change(displayNameInput, { target: { value: 'test' }});

    const emailInput = screen.getByLabelText(/e-mail/i);
    expect(emailInput).toBeTruthy();
    await fireEvent.change(emailInput, { target: { value: 'test@example.com' }});

    const passwordInput = screen.getByLabelText('Password');
    expect(passwordInput).toBeTruthy();
    await fireEvent.change(passwordInput, { target: { value: 'password123' }});
    
    const confirmedPasswordInput = screen.getByLabelText(/confirmed password/i);
    expect(confirmedPasswordInput).toBeTruthy();
    await fireEvent.change(confirmedPasswordInput, { target: { value: 'password123' }});

    const signUpButton = screen.getByRole('button');
    expect(signUpButton).toBeTruthy();

    await fireEvent.click(signUpButton);
    expect(mockDispatch).toBeCalledWith(singUpStart('test@example.com', 'password123', 'test'));
  });

  test('show alert when passwords do not match', async () => {
    const mockAlert = vi.spyOn(window, 'alert').mockImplementation();

    renderWithProvider(<SignUpForm />, {
      preloadedState: {
        user: {
          currentUser: null
        }
      }
    });

    const displayNameInput = screen.getByLabelText(/display name/i);
    expect(displayNameInput).toBeTruthy();
    await fireEvent.change(displayNameInput, { target: { value: 'test' }});

    const emailInput = screen.getByLabelText(/e-mail/i);
    expect(emailInput).toBeTruthy();
    await fireEvent.change(emailInput, { target: { value: 'test@example.com' }});

    const passwordInput = screen.getByLabelText('Password');
    expect(passwordInput).toBeTruthy();
    await fireEvent.change(passwordInput, { target: { value: 'password123' }});
    
    const confirmedPasswordInput = screen.getByLabelText(/confirmed password/i);
    expect(confirmedPasswordInput).toBeTruthy();
    await fireEvent.change(confirmedPasswordInput, { target: { value: 'Password123' }});

    const signUpButton = screen.getByRole('button');
    expect(signUpButton).toBeTruthy();

    await fireEvent.click(signUpButton);

    expect(mockAlert).toHaveBeenCalledTimes(1);

    expect(mockAlert).toHaveBeenCalledWith('Passwords do not match!!');
  });
});