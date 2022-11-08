import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Enigma Button Test', () => {
  test('renders This is a button', () => {
    render(
      <Button>This is a button!</Button>
    )
    const linkElement = screen.getByText(/This is a button!/i)
    expect(linkElement).toBeInTheDocument()
  })

  test('check if click is called', () => {
    const clickFn = jest.fn()
    render(<Button onClick={clickFn} data-testid='button'>This is a button!</Button>)
    const button = screen.getByTestId('button')
    fireEvent.click(button)
    expect(clickFn).toHaveBeenCalled()
  })
})
