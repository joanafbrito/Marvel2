import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Loader from "../Loader/Loader";
import Series from '../Series/Series';
import axios from "axios";
import "./CharacterDetail.css";
import { sampleData } from "../../utils/sampledata";

const CharacterDetail = () => {
  // use params uses the information from the url used by the router
  const { id } = useParams();
  const [searchedCharacter, setSearchedCharacter] = useState(null);
  const [series, setSeries] = useState([]);

  console.log("top of the function ", id);

  useEffect(() => {
    getDataDetails();
  }, []);
  console.log("useeffest", searchedCharacter);
//   setSeries(searchedCharacter.series.items)

  const getDataDetails = async () => {
    // let pbk = "9b29a8325371bc7becbf4068fd0948eb";// my key
    let pbk = "fc4a6dba9ded4fe4a04e441646538fd2"; // second key
    let url = `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${pbk}`;
    console.log(url);
    return axios.get(url).then((res) => {
      setSearchedCharacter(res.data.data.results[0]);
    });
  };

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
            {/* <p>{searchedCharacter.series.items[0].name}</p> */}
            <Series series={ searchedCharacter.series.items}/>
            <img
              className="series-img"
            //   src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"
              src="'http://gateway.marvel.com/v1/public/series/22008'"
              // alt={searchedCharacter.series.items[5].name}
              alt="Avanges endgame series"
            />
          </section>
        </div>
      )}
    </section>
  );
};

export default CharacterDetail;
