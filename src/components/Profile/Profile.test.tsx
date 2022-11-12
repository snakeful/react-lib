import { render, screen } from '@testing-library/react'
import { Profile } from './Profile'

describe('Enigma Profile Test', () => {
  test('renders profile text', () => {
    render(
      <Profile dropdown={{ title: 'Profile' }}>
      </Profile>
    )
    const profileElement = screen.getByText('Profile')
    expect(profileElement).toBeInTheDocument()
  })
})
