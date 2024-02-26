import { describe, test, expect } from 'vitest';
import Button, { BUTTON_TYPE_CLASSES } from '../Button.jsx';
import { render, screen } from '@testing-library/react';

describe('button tests', () => {
  test('should be disabled when isLoading is true', () => {
    render(<Button isLoading={true}>Loading button</Button>);

    const loadingButton = screen.getByRole('button');

    expect(loadingButton.disabled).toBeTruthy();
  });

  test('should render the base button when nothing is passed', () => {
    render(<Button>Base button</Button>);

    const buttonElement = screen.getByText(/base button/i);

    const baseStyle = window.getComputedStyle(buttonElement);

    expect(baseStyle.getPropertyValue('background-color')).toBe('rgb(0, 0, 0)');
  });

  test('should render the google sign in button when passed google button type', () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.google}>Google button</Button>);

    const googleButton = screen.getByText(/google button/i);

    const googleStyle = window.getComputedStyle(googleButton);

    expect(googleStyle.getPropertyValue('background-color')).toBe('rgb(66, 133, 244)');
  });

  test('should render the inverted button when passed inverted button type', () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Inverted button</Button>);

    const invertedButton = screen.getByText(/inverted button/i);

    const invertedStyle = window.getComputedStyle(invertedButton);

    expect(invertedStyle.getPropertyValue('background-color')).toBe('rgb(255, 255, 255)');
  });
});