import { Layout } from 'components'
import { Home, Login, NotFound } from 'pages'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { authActions } from './store/auth-slice'

const App: React.FC = () => {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn)
  const dispatch = useDispatch()
  return (
    <div className="App">
      {!isLoggedIn && <Login login={authActions.login} />}
      {isLoggedIn &&
        <Layout options={{ brand: 'Enigma React Lib', sidebarTitle: 'Sidebar Menu', logout: () => dispatch(authActions.logout()) }}>
          <Routes key="content">
            <Route path="/" element={<Home />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Layout>
      }
    </div>
  )
}

export default App
