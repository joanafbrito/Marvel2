import React from "react";
import "./CharacterCard.css";
import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  return (
    <Link to={`/character/${props.id}`}>
      <section className="character-card">
        <div className="card-container">
          <img className="card-img" src={props.image} alt={props.name} />
          <div className="line"></div>
          <h3>{props.name}</h3>
        </div>
      </section>
    </Link>
  );
};

export default CharacterCard;
