import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { NgmLayout } from './components';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { authActions } from './store/auth-slice';

const App: React.FC = () => {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  return (
    <div className="App">
      {!isLoggedIn && <Login />}
      {isLoggedIn &&
        <NgmLayout options={{ brand: 'Enigma React Lib', sidebarTitle: 'Sidebar Menu', logout: () => dispatch(authActions.logout()) }}>
          <Routes key="content">
            <Route path="/" element={<Home></Home>} />
          </Routes>
        </NgmLayout>
      }
    </div>
  );
};

export default App;
