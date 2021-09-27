import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Search from "../Search/Search";
import AllCharacter from "../AllCharacter/AllCharacter";
import CharacterDetail from "../CharacterDetail/CharacterDetail";
import axios from "axios";
import "./App.css";
// import { getData } from '../../utils/apiCalls'
// import { sampleData } from "../../utils/sampledata";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");
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
    if (query.length >= 3) {
      return setQuery(lowerCaseIput);
    }
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
          <Switch>
            <Route exact path="/">
            {/* // {!characters.length && <Loader/>} // */}
            {/* {characters.length > 0 && ( */}
              <Search searchCharacter={searchCharacter} />
            {/* {error && <Error/>}  */}
              <AllCharacter
                characterData={characters}
              />
              {/* )} */}
            </Route>
            <Route path="/character/:id">
              <CharacterDetail />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
};

export default App;
