import { Check, Control } from 'components'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AnyAction } from 'redux'
import { Button, Card, Form } from 'semantic-ui-react'

export interface LoginForm {
  login: () => AnyAction
}

export const Login: React.FC<LoginForm> = ({ login }) => {
  const dispatch = useDispatch()
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(true)
  const [validated, setValidated] = useState(false)
  const handleUser = (event: any) => { setUser(event?.target?.value) }
  const handlePass = (event: any) => { setPassword(event?.target?.value) }
  const handleRememberMe = (event: any) => { setRememberMe(event?.target?.checked) }
  const handleSubmit = (event: any) => {
    setValidated(true)
    event.preventDefault()
    const form = event.currentTarget
    if (form.checkValidity()) {
      // Login
      dispatch(login())
      return
    }
    event.stopPropagation()
  }
  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit} className='ngm-login'>
        <Card>
          <Card.Content>
            <Card.Header style={{ align: 'center' }}>
              Login
            </Card.Header>
            <Control label='Username/Email' value={user} onChange={handleUser} required></Control>
            <Control label='Password' type='password' value={password} onChange={handlePass} required></Control>
            <Check label='Remember me?' toggle checked={rememberMe} onChange={handleRememberMe} required></Check>
          </Card.Content>
          <Card.Content extra>
            <Button right active floated='right' color='blue' type='submit'>Login</Button>
          </Card.Content>
        </Card>
      </Form>
    </>
  )
}
