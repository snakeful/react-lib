import { render, screen } from '@testing-library/react'
import { NgmControl } from './NgmControl'

describe('Enigma Input Test', () => {
  test('renders placeholder message', () => {
    render(
      <NgmControl placeholder='This is an input!' />
    )
    const placeholderElmenet = screen.getByPlaceholderText(/This is an input!/i)
    expect(placeholderElmenet).toBeInTheDocument()
  })

  test('renders textarea control', () => {
    render(
      <NgmControl as='textarea' data-testid='textarea' />
    )
    const textareaElement = screen.getByTestId('textarea')
    expect(textareaElement).toBeInTheDocument()
  })

})
