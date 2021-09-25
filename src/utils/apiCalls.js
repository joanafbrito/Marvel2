import React from 'react';
import MD5 from 'md5';


export const getData = () => {
    let pbK = '9b29a8325371bc7becbf4068fd0948eb';
    let priK = '67a0383c546a155af724cb93270d79e5a8119c9e';
    // let urlId = `https://gateway.marvel.com:443/v1/public/characters/1009664?apikey=${publicKey}`
    let url = 'https://gateway.marvel.com:443/v1/public/characters';
    let ts = Date.now();
    let hash = MD5(ts + priK + pbK).toString();
    let characterId = '1009664'; // Thor Id
    
    
   
    return fetch(url, {
        ts: ts,
        apiKey: pbK,
        hash: hash,
        characters: characterId
    })
           .then(res => res.ok ? res.json() : console.log(res))
           .then(data => console.log(data))
           console.log(hash)
          
}