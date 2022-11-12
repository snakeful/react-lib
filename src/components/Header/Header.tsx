import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu, Segment, SegmentProps } from 'semantic-ui-react'

export interface HeaderProps extends SegmentProps {
  brand: string
}

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { brand, children, inverted } = props
  const navChildren: any[] =
    children instanceof Array ?
      (children as []).flat() :
      [children || {}]
  const to = useNavigate()
  const handleTo = () => to('/')
  return (
    <Segment inverted={inverted} style={{ marginBottom: 0 }}>
      <Menu inverted={inverted} expand='lg' bg='dark'>
        {navChildren.filter(child => child.key === 'sidebar')}
        <Menu.Item header onClick={handleTo}>
          {brand}
        </Menu.Item>
        <Menu.Menu>
          {navChildren.filter(child => child.key === 'left')}
        </Menu.Menu>
        <Menu.Menu position='right'>
          {navChildren.filter(child => child.key === 'right')}
        </Menu.Menu>
      </Menu>
    </Segment>
  )
}
