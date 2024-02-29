import { describe, test, expect } from 'vitest';

import { selectCategories, selectCategoriesIsLoading, selectCategoriesMap } from '../category.selector';

const mockState = {
  categories: {
    isLoading: false,
    categories: [
      {
        title: 'face', 
        imageUrl: 'test', 
        items: [
          {id: 1, name: 'Product 1'},
          {id: 2, name: 'Product 2'},
        ],
      },
      {
        title: 'body', 
        imageUrl: 'test', 
        items: [
          {id: 3, name: 'Product 3'},
          {id: 4, name: 'Product 4'},
        ],
      },
    ],
  }
};

describe('categories selector tests', () => {
  test('selectCategories should return categories data', ()=> {
    const categoriesSlice = selectCategories(mockState);

    expect(categoriesSlice).toEqual(mockState.categories.categories);
  });

  test('selectCategoriesIsLoading should return isLoading state', () => {
    const categoriesIsLoadingSlice = selectCategoriesIsLoading(mockState);

    expect(categoriesIsLoadingSlice).toEqual(mockState.categories.isLoading);
  });

  test('selectCategoriesMap should convert the array into the appropiate map', () => {
    const expectedCategoriesMap = {
      face: [
        {id: 1, name: 'Product 1'},
        {id: 2, name: 'Product 2'},
      ],
      body: [
        {id: 3, name: 'Product 3'},
        {id: 4, name: 'Product 4'},
      ],
    };

    const categoriesMap = selectCategoriesMap(mockState);
    expect(categoriesMap).toEqual(expectedCategoriesMap);
  });
});