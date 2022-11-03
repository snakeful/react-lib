import { fireEvent, render, screen } from '@testing-library/react';
import { NgmBtn } from './NgmBtn';

describe('Enigma Button Test', () => {
  test('renders This is a button', () => {
    render(<NgmBtn>This is a button!</NgmBtn>);
    const linkElement = screen.getByText(/This is a button!/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('check if click is called', () => {
    const clickFn = jest.fn();
    render(<NgmBtn onClick={clickFn} data-testid="button">This is a button!</NgmBtn>);
    const button = screen.getByTestId('button');
    fireEvent.click(button);
    expect(clickFn).toHaveBeenCalled();
  });
});
