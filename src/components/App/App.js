import React from 'react';
import './App.css';
import { getData } from '../../utils/apiCalls'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Marvel 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

