import { render, screen } from '@testing-library/react';
import NgmInput from './NgmInput';

test('renders placeholder message', () => {
  render(<NgmInput placeholder="This is an input!" />);
  const placeholderElmenet = screen.getByPlaceholderText(/This is an input!/i);
  expect(placeholderElmenet).toBeInTheDocument();
});
