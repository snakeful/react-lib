import { Layout } from 'components'
import { Home, Login, Modules, NotFound } from 'pages'
import React from 'react'
import { Nav } from 'react-bootstrap'
import { FaTh } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Route, Routes } from 'react-router-dom'
import { authActions } from './store/auth-slice'

const App: React.FC = () => {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn)
  const dispatch = useDispatch()
  return (
    <div className='App'>
      {!isLoggedIn && <Login login={authActions.login} />}
      {isLoggedIn &&
        <Layout
          options={{
            brand: 'Enigma React Lib',
            sidebarTitle: 'Sidebar Menu',
            logout: () => dispatch(authActions.logout())
          }}
          navLinks={[
            <LinkContainer to='/modules' key='left'>
              <Nav.Link className='text-light'>
                <FaTh />
                &nbsp;&nbsp;Modules
              </Nav.Link>
            </LinkContainer>
          ]}>
          <Routes key='content'>
            <Route path='/' element={<Home />} />
            <Route path='/modules' element={<Modules />}></Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Layout>
      }
    </div>
  )
}

export default App
