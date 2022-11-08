import React from 'react'
import { NavDropdown, NavDropdownProps } from 'react-bootstrap'
import { FaCog, FaDoorClosed, FaUser } from 'react-icons/fa'

export interface ProfileProps extends NavDropdownProps {
  logout?: () => void
};

export const Profile: React.FC<ProfileProps> = (props: ProfileProps) => {
  const { children, logout = () => { } } = props
  const navProps = { ...props }
  delete navProps.logout
  return (
    <>
      <NavDropdown {...navProps}>
        <NavDropdown.Item>
          <FaUser />
          &nbsp;&nbsp;Profile
        </NavDropdown.Item>
        <NavDropdown.Item>
          <FaCog />
          &nbsp;&nbsp;Settings
        </NavDropdown.Item>
        {children}
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={logout}>
          <FaDoorClosed />
          &nbsp;&nbsp;Logout
        </NavDropdown.Item>
      </NavDropdown>
    </>
  )
}
