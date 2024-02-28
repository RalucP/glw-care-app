import { screen, fireEvent } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { renderWithProvider } from '../../../utils/test/test.utils';

import ProductCard from '../ProductCard';

describe('product card test',  () => {
  test('it should add the product item when product card item is clicked', async () => {
    const mockProduct = {
      id: 1,
      imageUrl: 'test',
      name: 'Item A',
      price: 100
    }
    
    const { store } = renderWithProvider(<ProductCard product={mockProduct} />, {
      preloadedState: {
        cart: {
          cartItems: [],
        }
      }
    });

    const addToCartButtonElement = screen.getByText(/add to cart/i);
    await fireEvent.click(addToCartButtonElement);

    expect(store.getState().cart.cartItems.length).toBe(1);
  });
});