import { render, screen } from '@testing-library/react'
import { NgmSidebar } from './NgmSidebar'

describe('Enigma Input Test', () => {
  const matchMediaMock = () => { // Must be called for non render HTML elements
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))
    })
  }

  test('renders show sidebar', () => {
    matchMediaMock()
    render(<NgmSidebar show={true}>NgmSidebar</NgmSidebar>)
    const textElement = screen.getByText('NgmSidebar')
    expect(textElement).toBeInTheDocument()
  })
})
