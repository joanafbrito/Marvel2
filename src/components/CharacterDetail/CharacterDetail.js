import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Loader from "../Loader/Loader";
import axios from "axios";
import "./CharacterDetail.css";
import { sampleData } from "../../utils/sampledata";

const CharacterDetail = () => {
  // use params uses the information from the url used by the router
  const { id } = useParams();
  const [searchedCharacter, setSearchedCharacter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getDetails();
    console.log(searchedCharacter);
  }, []);

  const getDetails = async () => {
    // let pbk = "9b29a8325371bc7becbf4068fd0948eb";// my key
    // // let pbk = "fc4a6dba9ded4fe4a04e441646538fd2";// second key
    // let url =`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${pbk}`;

    // return axios.get(url).then((res) => {
    //     setSearchedCharacter(res.data.data.results[0])
    //     setIsLoading(false)
    // });
    setSearchedCharacter(sampleData.data.results[0]);
    setIsLoading(false);
  };
//   let searchedCharacterImg = `${searchedCharacter.thumbnail.path}.${searchedCharacter.thumbnail.extension}`;
  // let characterImg = `${searchcharacter.thumbnail.path}.${character.thumbnail.extension}`

  console.log(sampleData.data.results);
  return (
    <section className="character-detail">
      {isLoading && <Loader />}
      {searchedCharacter && (
        <div className='details-container'>
            <section className="character-info">
                <article className="text-info">
                    <h2 className='character-name'>{searchedCharacter.name}</h2>
                    <p>{searchedCharacter.description}</p>              
                    {/* <p>{ searchedCharacter.id}</p> */}
                </article>
                <img
                    className="searched-character-img"
                    // src={searchedCharacterImg}
                    src="http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350.jpg"
                    alt={searchedCharacter.name}
                />
            </section>
            <section className='series-container'>
                {/* <p>{searchedCharacter.series.items[10].name}</p> */}
                <img
                    className="series-img"
                    src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg"
                    // alt={searchedCharacter.comics.item[10].name}
                    alt='Avanges endgame series'
                />
            </section>
        </div>       
      )}
    </section>
  );
};

export default CharacterDetail;
