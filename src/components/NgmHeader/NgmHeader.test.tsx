import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { NgmHeader } from './NgmHeader'

describe('Enigma Header Test', () => {
  test('renders header text', () => {
    render(
      <BrowserRouter>
        <NgmHeader brand='NgmHeader'></NgmHeader>
      </BrowserRouter>
    )
    const textElement = screen.getByText('NgmHeader')
    expect(textElement).toBeInTheDocument()
  })

})
