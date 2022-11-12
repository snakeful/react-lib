import React, { useState } from 'react'
import { Grid, Menu, Segment, Sidebar as ReactSidebar, SidebarProps as ReactSidebarProps } from 'semantic-ui-react'

export interface SidebarProps extends ReactSidebarProps {
}

export const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
  const { children, title } = props
  const [state, setState] = useState({ activeItem: 'Enterprise' })
  const handleItemClick = (_e: any, { name }: any) => setState({ activeItem: name })
  const { activeItem } = state
  return (
    <Grid.Column id='Sidebar'>
      <ReactSidebar.Pushable as={Segment}>
        <ReactSidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          width='thin'
          vertical
          {...props}>
          {title}
          <Menu.Item>
            <Menu.Header>Products</Menu.Header>
            <Menu.Menu>
              <Menu.Item
                name='enterprise'
                active={activeItem === 'enterprise'}
                onClick={handleItemClick}
              />
              <Menu.Item
                name='consumer'
                active={activeItem === 'consumer'}
                onClick={handleItemClick}
              />
            </Menu.Menu>
          </Menu.Item>
          <Menu.Item>
            <Menu.Header>CMS Solutions</Menu.Header>
            <Menu.Menu>
              <Menu.Item
                name='rails'
                active={activeItem === 'rails'}
                onClick={handleItemClick}
              />
              <Menu.Item
                name='python'
                active={activeItem === 'python'}
                onClick={handleItemClick}
              />
              <Menu.Item
                name='php'
                active={activeItem === 'php'}
                onClick={handleItemClick}
              />
            </Menu.Menu>
          </Menu.Item>
          <Menu.Item>
            <Menu.Header>Hosting</Menu.Header>
            <Menu.Menu>
              <Menu.Item
                name='shared'
                active={activeItem === 'shared'}
                onClick={handleItemClick}
              />
              <Menu.Item
                name='dedicated'
                active={activeItem === 'dedicated'}
                onClick={handleItemClick}
              />
            </Menu.Menu>
          </Menu.Item>
          <Menu.Item>
            <Menu.Header>Support</Menu.Header>
            <Menu.Menu>
              <Menu.Item
                name='email'
                active={activeItem === 'email'}
                onClick={handleItemClick}
              >
                E-mail Support
              </Menu.Item>
              <Menu.Item
                name='faq'
                active={activeItem === 'faq'}
                onClick={handleItemClick}
              >
                FAQs
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>
        </ReactSidebar>
        {/* <Offcanvas.Header closeButton>
          <Offcanvas.Title>{title}</Offcanvas.Title>
        </Offcanvas.Header> */}
        <ReactSidebar.Pusher>
          {children}
        </ReactSidebar.Pusher>
      </ReactSidebar.Pushable>
    </Grid.Column>
  )
}