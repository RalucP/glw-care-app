import { screen, cleanup } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";

import { renderWithProvider } from '../../../utils/test/test.utils';
import Category from '../Category';

describe('cateogry tests', () => {
  beforeEach(() => {
    cleanup();
  });

  vi.mock('react-router-dom', async () => {
    const mod = await vi.importActual('react-router-dom');

    return {
      ...mod,
      useParams: () => ({
        category: 'face'
      })
    }
  });

  test('it should render a spinner if isLoading is true', () => {
    renderWithProvider(<Category />, {
      preloadedState: {
        categories: {
          isLoading: true,
          categories: []
        }
      }
    });

    const spinnerElement = screen.getByTestId('spinner');
    expect(spinnerElement).toBeTruthy();
  });

  test('it should render products if isLoading is false and there are items present', () => {
    renderWithProvider(<Category />, {
      preloadedState: {
        categories: {
          isLoading: false,
          categories: [
            {
              title: 'face',
              items: [
                {id: 1, name: 'Product 1'},
                {id: 2, name: 'Product 2'},
              ]
            }
          ]
        }
      }
    });

    const spinnerElement = screen.queryByTestId('spinner');
    expect(spinnerElement).toBeFalsy();

    const product1Element = screen.getByText(/product 1/i);
    expect(product1Element).toBeTruthy(); 
  })
});