import React, { useState } from 'react'
import { Card, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { AnyAction } from 'redux'
import { NgmBtn, NgmCheck, NgmControl } from '../../components'

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
        <Card bg='dark'>
          <Card.Header className='text-center'>
            <span className='text-light'>Login</span>
          </Card.Header>
          <Card.Body>
            <Form.Group className='mt-1'>
              <NgmControl label='Username/Email' value={user} onChange={handleUser} required></NgmControl>
            </Form.Group>
            <Form.Group className='mt-1'>
              <NgmControl label='Password' type='password' value={password} onChange={handlePass} required></NgmControl>
            </Form.Group>
            <Form.Group className='mt-1'>
              <NgmCheck className='text-light' label='Remember me?' type='switch' checked={rememberMe} onChange={handleRememberMe}></NgmCheck>
            </Form.Group>
          </Card.Body>
          <Card.Footer className='text-end pt-0 pb-3'>
            <NgmBtn type='submit'>Login</NgmBtn>
          </Card.Footer>
        </Card>
      </Form>
    </>
  )
}
