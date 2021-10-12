import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Loader from "../Loader/Loader";
import Series from '../Series/Series';
import axios from "axios";
import "./CharacterDetail.css";

const CharacterDetail = () => {
  // use params uses the information from the url used by the router
  const { id } = useParams();
  const [searchedCharacter, setSearchedCharacter] = useState(null);


  const getDataDetails = async () => {
    // let pbk = "9b29a8325371bc7becbf4068fd0948eb";// my key
    let pbk = "fc4a6dba9ded4fe4a04e441646538fd2"; // second key
    let url = `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${pbk}`;
  
    return axios.get(url).then((res) => {
      setSearchedCharacter(res.data.data.results[0]);
    });
  };

  useEffect(() => {
    getDataDetails();
  }, []);

  return (
    <section className="character-detail">
      {searchedCharacter === null && <Loader />}
      {searchedCharacter !== null && (
        <div className="details-container">
          <section className="character-info">
            <article className="text-info">
              <h2 className="character-name">{searchedCharacter.name}</h2>
              <p>{searchedCharacter.description}</p>
            </article>
            <img
              className="searched-character-img"
              src={`${searchedCharacter.thumbnail.path}.${searchedCharacter.thumbnail.extension}`}
              alt={searchedCharacter.name}
            />
          </section>
          <section className="series-container">
            <h2 className='series'> {searchedCharacter.series.available } Series Available </h2>
            <Series series={ searchedCharacter.series.items}/>
          </section>
        </div>
      )}
    </section>
  );
};

export default CharacterDetail;
