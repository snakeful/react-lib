import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { NgmLayout } from './components';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';

const App: React.FC = () => {

  return (
    <div className="App">
      <NgmLayout options={{ brand: 'Enigma React Lib', sidebarTitle: 'Sidebar Menu' }}>
        <Routes key="content">
          <Route path="/home" element={<Home></Home>} />
          <Route path="/login" element={<Login></Login>} />
        </Routes>
      </NgmLayout>
    </div>
  );
};

export default App;
