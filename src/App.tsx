import React from 'react';
import { InputGroup } from 'react-bootstrap';
import './App.css';
import NgmBtn from './components/NgmBtn/NgmBtn';
import NgmInput from './components/NgmInput/NgmInput';

const App: React.FC = () => {
  const click = () => {
    alert('Clicked!');
  };
  return (
    <div className="App">
      <NgmBtn onClick={click}>This is a button!</NgmBtn>
      <InputGroup>
        <NgmInput placeholder="This is an input!" />
        <NgmBtn onClick={click}>Click please</NgmBtn>
      </InputGroup>
    </div>
  );
};

export default App;
