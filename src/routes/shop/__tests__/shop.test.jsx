import { describe, test, expect, vi } from "vitest";
import { renderWithProvider } from '../../../utils/test/test.utils';
import * as reactRedux from 'react-redux';
import { Routes, Route } from "react-router-dom";

import Shop from "../Shop";
import { fetchCategoriesStart } from "../../../store/categories/category.action";

vi.mock('react-redux', async () => {
  const mod = await vi.importActual('react-redux');

  return {
    ...mod,
    useDispatch: vi.fn()
  }
})

describe('shop tests', () => {
  test('dispatched fetchCategoriesStart action on mount', () => {
    const mockDispatch = vi.fn();

    vi.mocked(reactRedux.useDispatch).mockReturnValue(mockDispatch);

    renderWithProvider(
      <Routes>
        <Route path='*' element={<Shop />} />
      </Routes>, 
      {
        preloadedState: {
          categories: {
            categories: [
              {
                title: 'face',
                items: [
                  {
                    id: 1,
                    name: 'product 1'
                  }
                ]
              }
            ],
          }
        }
      }
    )

    expect(mockDispatch).toHaveBeenCalledWith(fetchCategoriesStart());
  })
})