import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import Loader from '../Loader/Loader';
import axios from 'axios';


const CharacterDetail = () => {
    // use params uses the information from the url used by the router  
    const { id } = useParams()
    const [ searchCharacter, setSearchedCharacter] = useState([]);
    const [ isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getDetails();
      }, [searchCharacter]);
    
    const getDetails = async () => {
        // let pbk = "9b29a8325371bc7becbf4068fd0948eb";
        let pbk = "fc4a6dba9ded4fe4a04e441646538fd2";
        let url =`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${pbk}`;
    
        return axios.get(url).then((res) => {
            setSearchedCharacter(res.data.data.results[0])
            setIsLoading(false)
        });
    };

    return (
        <section className='character-detail'>
        {isLoading && <Loader/>}
        {searchCharacter && 
            <h2>{ searchCharacter.name}</h2>}
        </section>
    );
}


export default CharacterDetail;