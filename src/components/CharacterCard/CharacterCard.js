import React from 'react';
import './CharacterCard.css';


const CharacterCard = (props) => {
    return (
        <section className='character-card'>
            <div className='card-container'>
                <img className='card-img' src={ props.image }  alt={props.name}/>
                <div className='line'></div>
                <h3>{ props.name }</h3>
            </div>
        </section>
    )
}

export default CharacterCard;