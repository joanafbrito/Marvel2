import React from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import './AllCharacter.css';

const AllCharacter = ({ characterData }) => {

    const dataCharacter = characterData.map((character) => {
        // let characterId =character.id;
        let characterImg = `${character.thumbnail.path}.${character.thumbnail.extension}`

        return (
            <CharacterCard
                 key={ character.id}
                 id={ character.id }
                 image={ characterImg }
                 name={ character.name }
            />
        );
    });
    return <div className="all-character">{dataCharacter}</div>
};

export default AllCharacter;