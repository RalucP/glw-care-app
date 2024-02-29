import { screen, cleanup, fireEvent } from "@testing-library/react";
import { describe, test, expect, beforeEach, vi } from "vitest";
import * as reactRedux from 'react-redux';

import Navigation from "../Navigation";
import { renderWithProvider } from "../../../utils/test/test.utils";
import { signOutStart } from "../../../store/user/user.action";

describe('navigation tests', () => {
  beforeEach(() => {
    cleanup();
  });

  vi.mock('react-redux', async () => {
    const mod = await vi.importActual('react-redux');

    return {
      ...mod,
      useDispatch: vi.fn()
    }
  });

  test('it should render a sign in link if there is no current user', () => {

    renderWithProvider(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: null,
        },
      },
    });

    const signOutLinkElement = screen.queryByText(/sign out/i);
    expect(signOutLinkElement).toBeNull();

    const signInLinkElement = screen.getByText(/sign in/i);
    expect(signInLinkElement).toBeTruthy();
  });

  test('it should render sign out if there is a current user', () => {
    
    renderWithProvider(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {}
        }
      }
    });

    const signInLinkElement = screen.queryByText(/sign in/i);
    expect(signInLinkElement).toBeNull();

    const signOutLinkElement = screen.getByText(/sign out/i);
    expect(signOutLinkElement).toBeTruthy();
  });

  test('cart dropdown is rendered when isCartOpen is true', () => {
    renderWithProvider(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: true,
          cartItems: []
        },
      },
    });

    const cartDropDownElement = screen.getByText(/your cart is empty/i);
    expect(cartDropDownElement).toBeTruthy();
  });

  test('cart dropdown is not rendered when isCartOpen is false', () => {
    renderWithProvider(<Navigation/>, {
      preloadedState: {
        cart: {
          isCartOpen: false,
          cartItems: [],
        },
      },
    });

    const cartDropDownElement = screen.queryByText(/your cart is empty/i);
    expect(cartDropDownElement).toBeNull();
  });

  test('It should dispatch signOutStart action when clicking on the Sign Out link', async () => {
    const mockDispatch = vi.fn();

    vi.mocked(reactRedux.useDispatch).mockReturnValue(mockDispatch);

    renderWithProvider(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });

    const signOutLinkElement = screen.getByText(/sign out/i);

    expect(signOutLinkElement).toBeTruthy();

    await fireEvent.click(signOutLinkElement);

    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith(signOutStart());

    mockDispatch.mockClear();
  });
});