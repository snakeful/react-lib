import { render, screen } from '@testing-library/react';
import NgmBtn from './NgmBtn';

test('renders learn react link', () => {
  render(<NgmBtn>This is a button!</NgmBtn>);
  const linkElement = screen.getByText(/This is a button!/i);
  expect(linkElement).toBeInTheDocument();
});
