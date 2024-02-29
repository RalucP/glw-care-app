import { screen, cleanup, fireEvent } from "@testing-library/react";
import { describe, test, expect, beforeEach } from "vitest";

import Navigation from "../Navigation";
import { renderWithProvider } from "../../../utils/test/test.utils";

describe('navigation tests', () => {
  beforeEach(() => {
    cleanup();
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
});