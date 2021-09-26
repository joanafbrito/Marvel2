import React, { useEffect, useState } from 'react';
import './App.css';
// import { getData } from '../../utils/apiCalls'
import { sampleData } from '../../utils/sampledata';
import Header from '../Header/Header';
import AllCharacter from '../AllCharacter/AllCharacter';
import axios from 'axios';

const App = () => {
  const [characters, setCharacters] = useState([]);

    useEffect(() => {
      getData()
    }, []);

    const getData = async () => {
        let pbk = '9b29a8325371bc7becbf4068fd0948eb';
        let url = `https://gateway.marvel.com:443/v1/public/characters?limit=100&series=354&apikey=${pbk}`;
     
        return axios.get(url)
                    .then(res => {
                      setCharacters(res.data.data.results)})
    }        

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <AllCharacter characterData={ characters }/>
      </header>
    </div>
  );
}

export default App;

