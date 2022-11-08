import { render, screen } from '@testing-library/react'
import { Control } from './Control'

describe('Enigma Input Test', () => {
  test('renders placeholder message', () => {
    render(
      <Control placeholder='This is an input!' />
    )
    const placeholderElmenet = screen.getByPlaceholderText(/This is an input!/i)
    expect(placeholderElmenet).toBeInTheDocument()
  })

  test('renders textarea control', () => {
    render(
      <Control as='textarea' data-testid='textarea' />
    )
    const textareaElement = screen.getByTestId('textarea')
    expect(textareaElement).toBeInTheDocument()
  })

})
