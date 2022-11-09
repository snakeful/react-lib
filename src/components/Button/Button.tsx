import React from 'react'
import { Button as ReactButton, ButtonProps } from 'semantic-ui-react'

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { children, color = 'blue' } = props
  return (
    <ReactButton color={color} {...props}>{children}</ReactButton>
  )
}
