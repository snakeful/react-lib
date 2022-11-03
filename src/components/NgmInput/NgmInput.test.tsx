import { render, screen } from '@testing-library/react';
import NgmInput from './NgmInput';

describe('Enigma Input Test', () => {
  test('renders placeholder message', () => {
    render(<NgmInput placeholder="This is an input!" />);
    const placeholderElmenet = screen.getByPlaceholderText(/This is an input!/i);
    expect(placeholderElmenet).toBeInTheDocument();
  });

  test('renders textarea control', () => {
    render(<NgmInput as="textarea" data-testid="textarea" />);
    const textareaElement = screen.getByTestId("textarea");
    expect(textareaElement).toBeInTheDocument();
  });

});
