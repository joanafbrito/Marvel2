import React, { useEffect, useState } from "react";
import "./App.css";
// import { getData } from '../../utils/apiCalls'
import { sampleData } from "../../utils/sampledata";
import Header from "../Header/Header";
import AllCharacter from "../AllCharacter/AllCharacter";
import axios from "axios";
import Search from "../Search/Search";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");
  const [searchedCharacter, setSearchedCharacter] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getData();
  }, [query]);

  const getData = async () => {
    let pbk = "9b29a8325371bc7becbf4068fd0948eb";
    let url = `https://gateway.marvel.com:443/v1/public/characters?limit=100&series=354&apikey=${pbk}`;

    if (query.length >= 3) {
      url = `https://gateway.marvel.com:443/v1/public/characters?apikey=${pbk}&nameStartsWith=${query}`;
    }

    return axios.get(url).then((res) => {
      setCharacters(res.data.data.results);
    });
  };

  const searchCharacter = (query) => {
    const lowerCaseIput = query.toLowerCase();
    if (lowerCaseIput.length >= 3) {
      return setQuery(lowerCaseIput);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Search searchCharacter={searchCharacter} />
        <AllCharacter characterData={characters} />
      </header>
    </div>
  );
};

export default App;
