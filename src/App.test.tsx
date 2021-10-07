import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { data } from './tableMock';

beforeEach(() => render(<App />))

test('renders learn react link', () => {
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders lemons table initially with every instance', () => {
  const tableWrapper = screen.getByRole('table');
  expect(tableWrapper).toBeInTheDocument();

  const rows = screen.getAllByRole('row');
  expect(rows.length).toBe(data.length + 1);
})