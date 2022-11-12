import { Layout } from 'components'
import { Home, Login, Modules, NotFound } from 'pages'
import React from 'react'
import { FaTh } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'
import { authActions } from './store/auth-slice'

const App: React.FC = () => {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn)
  const to = useNavigate()
  const handleTo = () => to('/modules')
  return (
    <div id='App'>
      {!isLoggedIn && <Login login={authActions.login} />}
      {isLoggedIn &&
        <Layout
          inverted
          options={{
            brand: 'Enigma React Lib',
            sidebarTitle: 'Sidebar Menu',
            logout: authActions.logout
          }}
          navLinks={[
            <Menu.Item onClick={handleTo} key='left'>
              <FaTh />
              &nbsp;&nbsp;Modules
            </Menu.Item>
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
