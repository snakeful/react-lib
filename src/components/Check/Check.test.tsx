import { render, screen } from '@testing-library/react'
import { Check } from './Check'

describe('Enigma Check Control Test', () => {
  test('renders check control', () => {
    render(
      <Check data-testid='check'></Check>
    );
    const checkElement = screen.getByTestId('check')
    expect(checkElement).toBeInTheDocument()
  })

})
