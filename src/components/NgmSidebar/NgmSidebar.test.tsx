import { render, screen } from '@testing-library/react';
import { NgmSidebar } from './NgmSidebar';

describe('Enigma Input Test', () => {
  test('renders sidebar text', () => {
    render(<NgmSidebar>NgmSidebar</NgmSidebar>);
    const textElement = screen.getByText('NgmSidebar');
    expect(textElement).toBeInTheDocument();
  });

});
