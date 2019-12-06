import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navigation from './Navigation';

test('button click toggles dark mode', () => {
    const { getByTestId } = render(<Navigation/>)

    expect(getByTestId('dark-mode-button').textContent).toBe('go dark')
    fireEvent.click(getByTestId('dark-mode-button'))
    expect(getByTestId('dark-mode-button').textContent).toBe('go light')
    fireEvent.click(getByTestId('dark-mode-button'))
    expect(getByTestId('dark-mode-button').textContent).toBe('go dark')
})