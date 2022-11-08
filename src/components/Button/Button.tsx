import React from 'react'
import { Button as ReactButton, ButtonProps } from 'react-bootstrap'

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { children, variant = 'primary' } = props
  return (
    <ReactButton variant={variant} {...props}>{children}</ReactButton>
  )
}
