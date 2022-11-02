import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const buttonElement = screen.getByText(/This is a button!/i);
  const inputElement = screen.getByPlaceholderText(/This is an input!/i);
  expect(buttonElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
});
