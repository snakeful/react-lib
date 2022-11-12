import React from 'react'
import { Form, FormInputProps } from 'semantic-ui-react'

export interface ControlProps extends FormInputProps {
  label?: string
  required?: boolean
}

export const Control: React.FC<ControlProps> = (props: ControlProps) => {
  const { children, label = '', placeholder, required } = props
  return (
    <Form.Input fluid label={label} placeholder={placeholder || label} required={required}>{children}</Form.Input>
  )
}
