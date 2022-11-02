import React from 'react';
import './App.css';
import NgmBtn from './components/NgmBtn/NgmBtn';
import NgmInput from './components/NgmInput/NgmInput';

const App: React.FC = () => {
  return (
    <div className="App">
      <NgmBtn>This is a button!</NgmBtn>
      <NgmInput placeholder="This is an input!"/>
    </div>
  );
}

export default App;
