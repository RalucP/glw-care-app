import { screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { renderWithProvider } from '../../../utils/test/test.utils.jsx';
import Cart from "../Cart.jsx";

describe('cart tests', () => {
  test('uses preloaded state to render', () => {
    const initialCartItems = [
      {id: 1, name: 'Item A', imageUrl: 'test', price: 100, quantity: 1},
      {id: 1, name: 'Item A', imageUrl: 'test', price: 100, quantity: 1},
    ];

    renderWithProvider(<Cart />, {
      preloadedState: {
        cart: {
          cartItems: initialCartItems,
        },
      },
    });

    const cartElement = screen.getByText('2');

    expect(cartElement).toBeTruthy();
  });
});