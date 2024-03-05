import { describe, test, expect, vi } from "vitest";
import { fireEvent, screen, render } from "@testing-library/react";
import * as reactRouterDom from 'react-router-dom';

import CategoryCard from "../CategoryCard";

vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual('react-router-dom');

  return {
    ...mod,
    useNavigate: vi.fn()
  }
});

describe('category card tests',  () => {
  test('navigate function is called with the expected URL', async () => {
    const mockNavigate = vi.fn();

    vi.mocked(reactRouterDom.useNavigate).mockReturnValue(mockNavigate);

    const mockCategory = {
      title: 'face',
      imageUrl: 'test'
    };

    render(<CategoryCard category={mockCategory} />)

    const categoryCardButton = screen.getByText(/face/i);

    expect(categoryCardButton).toBeTruthy();

    await fireEvent.click(categoryCardButton);

    expect(mockNavigate).toBeCalledWith('/shop/face')

    mockNavigate.mockClear();
  })
})