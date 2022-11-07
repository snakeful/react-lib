import React from 'react'
import { Offcanvas, OffcanvasProps } from 'react-bootstrap'

export interface SidebarProps extends OffcanvasProps {
  onHide?: () => void
}

export const NgmSidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
  const { children, title, onHide = () => { }, show = false } = props
  return (
    <>
      <Offcanvas show={show} onHide={onHide} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {children}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}