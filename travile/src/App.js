import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <button
            type='button'
            onClick={() => { alert("hellow") }}
          >
            Faced a problem?
          </button>
      </header>
    </div>
  );
}

export default App;
