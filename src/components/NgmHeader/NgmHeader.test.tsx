import { render, screen } from '@testing-library/react';
import { NgmHeader } from './NgmHeader';

describe('Enigma Header Test', () => {
  test('renders header text', () => {
    render(<NgmHeader brand="NgmHeader"></NgmHeader>);
    const textElement = screen.getByText('NgmHeader');
    expect(textElement).toBeInTheDocument();
  });

});
