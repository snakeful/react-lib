import { render, screen } from '@testing-library/react'
import { NgmProfile } from './NgmProfile'

describe('Enigma Profile Test', () => {
  test('renders profile text', () => {
    render(
      <NgmProfile title='Profile' logout={() => { }}>
      </NgmProfile>
    )
    const profileElement = screen.getByText('Profile')
    expect(profileElement).toBeInTheDocument()
  })
})
