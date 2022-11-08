import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export interface HeaderProps extends React.CanvasHTMLAttributes<any> {
  brand: string
}

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { brand, children } = props
  const navChildren: any[] =
    children instanceof Array ?
      (children as []).flat() :
      [children || {}]

  return (
    <div {...props}>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container fluid>
          {navChildren.filter(child => child.key === 'sidebar')}
          <LinkContainer to='/'>
            <Navbar.Brand>
              {brand}
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              {navChildren.filter(child => child.key === 'left')}
            </Nav>
            <Nav>
              {navChildren.filter(child => child.key === 'right')}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
