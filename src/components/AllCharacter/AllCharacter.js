import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import './AllCharacter.css';

const AllCharacter = ({ characterData }) => {

    const dataCharacter = characterData.map((character) => {
        let characterImg = `${character.thumbnail.path}.${character.thumbnail.extension}`
        if(characterImg !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg") {
        return (
            <CharacterCard
                 key={ character.id}
                 id={ character.id }
                 image={ characterImg }
                 name={ character.name }
            />
        )}
    });
    return <div className="all-character">{dataCharacter}</div>
};

export default AllCharacter;