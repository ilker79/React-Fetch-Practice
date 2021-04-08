import { render, screen } from '@testing-library/react';
import Pokemon from '../Pokemon';
import App from './App';
import { render, fireEvent } from '@testing-library/react';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

