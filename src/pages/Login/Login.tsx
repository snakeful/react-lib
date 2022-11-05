import React, { useState } from 'react';
import { Card, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { NgmBtn, NgmInput } from '../../components';
import { authActions } from '../../store/auth-slice';

export const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [validated, setValidated] = useState(false);
  const handleUser = (event: any) => { setUser(event?.target?.value); };
  const handlePass = (event: any) => { setPassword(event?.target?.value); };
  const handleRememberMe = (event: any) => { setRememberMe(event?.target?.checked); };
  const handleSubmit = (event: any) => {
    setValidated(true);
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity()) {
      // Login
      dispatch(authActions.login());
      return;
    }
    event.stopPropagation();
  };
  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Card>
          <Card.Header className='text-center'>
            Login
          </Card.Header>
          <Card.Body>
            <Form.Group className='mt-1'>
              <NgmInput label='Username/Email' value={user} onChange={handleUser} required></NgmInput>
            </Form.Group>
            <Form.Group className='mt-1'>
              <NgmInput label='Password' type='password' value={password} onChange={handlePass} required></NgmInput>
            </Form.Group>
            <Form.Group className='mt-1'>
              <Form.Check label='Remember me?' type='switch' checked={rememberMe} onChange={handleRememberMe}></Form.Check>
            </Form.Group>
          </Card.Body>
          <Card.Footer className='text-right'>
            <NgmBtn type='submit'>Login</NgmBtn>
          </Card.Footer>
        </Card>
      </Form>
    </>
  )
};
