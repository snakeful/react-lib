import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './Header'

describe('Enigma Header Test', () => {
  test('renders header text', () => {
    render(
      <BrowserRouter>
        <Header brand='Header'></Header>
      </BrowserRouter>
    )
    const textElement = screen.getByText('Header')
    expect(textElement).toBeInTheDocument()
  })

})
