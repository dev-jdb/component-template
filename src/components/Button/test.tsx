import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Button from './';
import { btnColors } from './styles';

describe('Running Test for Button', () => {
  test('Check Button Disabled', () => {
    render(<Button text='Button' disabled />);
    expect(screen.getByRole('button', { name: 'Button' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Button' })).toHaveStyle({ opacity: 0.5 });
  });
  test('Check Button Primary', () => {
    render(<Button text='Primary' primary />);
    expect(screen.getByRole('button', { name: 'Primary' })).toHaveStyle({ color: btnColors.blue, opacity: 1 });
  });
});
