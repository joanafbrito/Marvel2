import React, { useEffect, useState } from 'react';
import './App.css';
import { getData } from '../../utils/apiCalls'

const App = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    getCharactersData();
  }, []);

  const getCharactersData = async () => {
    try {
      const res = await getData()
      const charactersData = await res.json()
      setCharacters(charactersData.data.results)
    } catch (err) {
      console.log("Error: ", err)
    }
  };
  console.log(characters)

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

