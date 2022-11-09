import React from 'react'
import { Form, FormCheckboxProps } from 'semantic-ui-react'

export interface CheckProps extends FormCheckboxProps {
  required?: boolean
}

export const Check: React.FC<CheckProps> = (props: CheckProps) => {
  return (
    <Form.Checkbox {...props} />
  )
}
