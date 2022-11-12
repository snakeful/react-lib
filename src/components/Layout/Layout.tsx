import { Header, Profile, Sidebar } from 'components'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { AnyAction } from 'redux'
import { Container, Menu } from 'semantic-ui-react'

export interface LayoutProps extends React.HTMLProps<any> {
  inverted?: boolean
  navLinks?: any[]
  options?: {
    brand: string
    sidebarTitle?: string
    logout: () => AnyAction
  }
};

export const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const { children, navLinks = [], options, inverted = false } = props
  const { brand = '', logout } = options || {}
  const [visible, setVisible] = useState(false)

  const toggleSidebar = () => {
    setVisible(true)
  }
  const onHide = () => setVisible(false)

  return (
    <>
      <Header inverted={inverted} brand={brand}>
        <Menu.Item onClick={toggleSidebar} key='sidebar'>
          <FaBars />
        </Menu.Item>
        <Profile item fitted logout={logout} dropdown={{ item: true, text: 'Profile' }} key='right'>
        </Profile>
        {navLinks}
      </Header>
      <Sidebar inverted={inverted} visible={visible} onHide={onHide}>
        <Container fluid>
          {children}
        </Container>
      </Sidebar>
    </>
  )
}
