import React from 'react'
import { FaCog, FaDoorClosed, FaUser } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { AnyAction } from 'redux'
import { Dropdown, DropdownProps, Menu } from 'semantic-ui-react'

export interface ProfileProps {
  children?: never[]
  dropdown?: DropdownProps
  inverted?: boolean
  item?: boolean
  fitted?: boolean
  logout?: () => AnyAction
};

export const Profile: React.FC<ProfileProps> = ({ children, inverted, fitted, logout, dropdown = {} }) => {
  const dispatch = useDispatch()
  const handleLogout = () => {
    logout && dispatch(logout())
  }
  return (
    <Menu.Item inverted={inverted} fitted={fitted}>
      <Dropdown {...dropdown}>
        <Dropdown.Menu>
          <Dropdown.Item>
            <FaUser />
            &nbsp;&nbsp;Profile
          </Dropdown.Item>
          <Dropdown.Item>
            <FaCog />
            &nbsp;&nbsp;Settings
          </Dropdown.Item>
          {children}
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogout}>
            <FaDoorClosed />
            &nbsp;&nbsp;Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  )
}
