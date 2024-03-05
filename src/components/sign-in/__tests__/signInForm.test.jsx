import { describe, test, expect, vi, beforeEach } from "vitest";
import { cleanup, fireEvent, screen } from "@testing-library/react";
import { renderWithProvider } from '../../../utils/test/test.utils';
import * as reactRedux from 'react-redux';

import SignInForm from "../SignInForm";

import { emailSignInStart, googleSignInStart } from "../../../store/user/user.action";

vi.mock('react-redux', async () => {
  const mod = await vi.importActual('react-redux');

  return {
    ...mod,
    useDispatch: vi.fn()
  }
});

describe('sign in from tests', () => {
  beforeEach(() => {
    cleanup();
  });

  test('should dispatch googleSignInStart when sign in with google button is clicked', async () => {
    const mockDispatch = vi.fn()

    vi.mocked(reactRedux.useDispatch).mockReturnValue(mockDispatch);

    renderWithProvider(<SignInForm />, {
      preloadedState: {
        user: {
          currentUser: null
        }
      }
    });

    const googleSignInButton = screen.getByText(/google sign in/i);
    expect(googleSignInButton).toBeTruthy();

    await fireEvent.click(googleSignInButton);
    expect(mockDispatch).toBeCalledWith(googleSignInStart());

    mockDispatch.mockClear();
  });

  test('should dispatch signInStart when sign in button is clicked', async () => {
    const mockDispatch = vi.fn();

    vi.mocked(reactRedux.useDispatch).mockReturnValue(mockDispatch);

    renderWithProvider(<SignInForm />, {
      preloadedState: {
        user: {
          currentUser: null
        }
      }
    });

    const emailInput = screen.getByLabelText(/email/i);
    await fireEvent.change(emailInput, { target: { value: 'test@example.com' }});
    
    const passwordInput = screen.getByLabelText(/password/i);
    await fireEvent.change(passwordInput, { target: { value: 'Password123' }});
    
    
    const signInButton = screen.getByText('Sign in');
    expect(signInButton).toBeTruthy();

    await fireEvent.click(signInButton);
    expect(mockDispatch).toBeCalledWith(emailSignInStart('test@example.com', 'Password123'));
  });
});