import { describe, test, expect, beforeEach } from "vitest";
import { cleanup, screen } from "@testing-library/react";
import { renderWithProvider } from '../../../utils/test/test.utils';

import CategoriesPreview from "../CategoriesPreview";

describe('categories preview tests', () => {
  beforeEach(() => {
    cleanup();
  });

  test('should render category preview if isLoading is false', () => {
    renderWithProvider(<CategoriesPreview />, {
      preloadedState: {
        categories: {
          categories: [
            {
              title: 'face', 
              items: [
                {
                  name: 'item 1',
                  imageUrl: 'test'
                },
                {
                  name: 'item 2',
                  imageUrl: 'test'
                },
              ]
            }, 
            {
              title: 'body', 
              items: [
                {
                  name: 'item 1',
                  imageUrl: 'test'
                },
                {
                  name: 'item 2',
                  imageUrl: 'test'
                },
              ]
            }
          ],
          isLoading: false
        }
      }
    })

    const faceCategoryTitle = screen.getByText(/face/i);
    expect(faceCategoryTitle).toBeTruthy();

    const bodyCategoryTitle = screen.getByText(/body/i);
    expect(bodyCategoryTitle).toBeTruthy();
  });

  test('should render the Spinner when isLoading is true', () => {
    renderWithProvider(<CategoriesPreview />, {
      preloadedState: {
        categories: {
          categories: [
            {
              title: 'face', 
              items: [
                {
                  name: 'item 1',
                  imageUrl: 'test'
                },
                {
                  name: 'item 2',
                  imageUrl: 'test'
                },
              ]
            }, 
            {
              title: 'body', 
              items: [
                {
                  name: 'item 1',
                  imageUrl: 'test'
                },
                {
                  name: 'item 2',
                  imageUrl: 'test'
                },
              ]
            }
          ],
          isLoading: true
        }
      }
    })

    const faceCategoryTitle = screen.queryByText(/face/i);
    expect(faceCategoryTitle).toBeFalsy();

    const bodyCategoryTitle = screen.queryByText(/body/i);
    expect(bodyCategoryTitle).toBeFalsy();
  })
})