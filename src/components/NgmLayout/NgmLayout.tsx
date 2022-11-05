import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import { NgmHeader } from '../NgmHeader/NgmHeader';
import { NgmProfile } from '../NgmProfile';
import { NgmSidebar } from '../NgmSidebar/NgmSidebar';

export interface LayoutProps extends React.HTMLProps<any> {
  variant?: string;
  options?: {
    brand: string;
    sidebarTitle?: string;
    logout: () => void;
  };
};

export const NgmLayout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const { children, options, variant = 'dark' } = props;
  const { brand = '', sidebarTitle = '', logout = () => { } } = options || {};
  const [show, setShow] = useState(false);

  const toggleSidebar = () => setShow(true);
  const onHide = () => setShow(false);
  return (
    <>
      <NgmSidebar title={sidebarTitle} show={show} onHide={onHide}></NgmSidebar>
      <NgmHeader brand={brand}>
        <Button variant={variant} onClick={toggleSidebar} key='sidebar' className='mx-1'>
          <FaBars />
        </Button>
        <NgmProfile menuVariant={variant} title='Profile' align='end' logout={logout} key='right'>
        </NgmProfile>
      </NgmHeader>
      <Container fluid>
        {children}
      </Container>
    </>
  )
}