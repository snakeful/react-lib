import React from 'react'
import { Button, ButtonProps } from 'react-bootstrap'

export interface IButtonProps extends ButtonProps {
}

export const NgmBtn: React.FC<IButtonProps> = (props: IButtonProps) => {
  const { children, variant = 'primary' } = props
  return (
    <Button variant={variant} {...props}>{children}</Button>
  )
}
