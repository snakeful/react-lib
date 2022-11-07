import { render, screen } from '@testing-library/react'
import { NgmCheck } from './NgmCheck'

describe('Enigma Check Control Test', () => {
  test('renders check control', () => {
    render(
      <NgmCheck data-testid='check'></NgmCheck>
    );
    const checkElement = screen.getByTestId('check')
    expect(checkElement).toBeInTheDocument()
  })

})
