import React from 'react'
import { Container, Label } from 'semantic-ui-react'

export const NotFound: React.FC<any> = () => {
  return (
    <Container
      fluid
      textAlign='center'
      content={<Label size='massive' content='Route not found!' icon='warning' color='red' />}
    />
  )
}
