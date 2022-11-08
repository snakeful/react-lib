import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { FaBars } from 'react-icons/fa'
import { Header } from '../Header/Header'
import { Profile } from '../Profile/Profile'
import { Sidebar } from '../Sidebar/Sidebar'

export interface LayoutProps extends React.HTMLProps<any> {
  variant?: string
  navLinks?: any[]
  options?: {
    brand: string
    sidebarTitle?: string
    logout: () => void
  }
};

export const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const { children, navLinks = [], options, variant = 'dark' } = props
  const { brand = '', sidebarTitle = '', logout = () => { } } = options || {}
  const [show, setShow] = useState(false)

  const toggleSidebar = () => setShow(true)
  const onHide = () => setShow(false)

  return (
    <>
      <Sidebar title={sidebarTitle} show={show} onHide={onHide}></Sidebar>
      <Header brand={brand}>
        <Button variant={variant} onClick={toggleSidebar} key='sidebar' className='mx-1'>
          <FaBars />
        </Button>
        <Profile menuVariant={variant} title='Profile' align='end' logout={logout} key='right'>
        </Profile>
        {navLinks}
      </Header>
      <Container fluid>
        {children}
      </Container>
    </>
  )
}
