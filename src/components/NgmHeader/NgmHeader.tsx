import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export interface HeaderProps extends React.CanvasHTMLAttributes<any> {
  brand: string;
}

export const NgmHeader: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { brand, children } = props;
  console.log(children);
  return (
    <div {...props}>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container fluid>
          {(children as any[]).filter(child => child.key === 'sidebar')}
          <LinkContainer to='/home'>
            <Navbar.Brand>
              {brand}
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              {(children as any[]).filter(child => child.key === 'left')}
            </Nav>
            <Nav>
              {(children as any[]).filter(child => child.key === 'right')}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
};