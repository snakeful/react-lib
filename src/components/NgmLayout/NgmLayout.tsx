import React, { useState } from 'react';
import { Button, Container, Nav } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { NgmHeader } from '../NgmHeader/NgmHeader';
import { NgmSidebar } from '../NgmSidebar/NgmSidebar';

export interface LayoutProps extends React.HTMLProps<any> {
  options?: {
    brand: string;
    sidebarTitle?: string;
  };
};

export const NgmLayout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const { children, options } = props;
  const [show, setShow] = useState(false);

  const toggleSidebar = () => setShow(true);
  const onHide = () => setShow(false);
  return (
    <>
      <NgmSidebar title={options?.sidebarTitle} show={show} onHide={onHide}></NgmSidebar>
      <NgmHeader brand={options?.brand || ''}>
        <Button variant='secondary' onClick={toggleSidebar} key='sidebar' className='mx-1'>
          <FaBars />
        </Button>
        <LinkContainer to='/features' key='left'>
          <Nav.Link>Features</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/login' key='right'>
          <Nav.Link>Login</Nav.Link>
        </LinkContainer>
      </NgmHeader>
      <Container fluid>
        {children}
      </Container>
    </>
  )
}