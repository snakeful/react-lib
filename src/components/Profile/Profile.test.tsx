import { render, screen } from '@testing-library/react'
import { Profile } from './Profile'

describe('Enigma Profile Test', () => {
  test('renders profile text', () => {
    render(
      <Profile title='Profile' logout={() => { }}>
      </Profile>
    )
    const profileElement = screen.getByText('Profile')
    expect(profileElement).toBeInTheDocument()
  })
})
