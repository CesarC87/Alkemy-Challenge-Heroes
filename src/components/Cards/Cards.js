import React, { useContext } from "react";
import styles from "./Cards.module.css";
import { Link } from "react-router-dom";
import { HeroContext } from '../../context/TeamContext'

const Cards = ({
  id,
  name,
  image,
  intelligence,
  strength,
  speed,
  durability,
  power,
  combat,
}) => {
  const {deleteHero, clearTeam} = useContext(HeroContext);
  const onRemove = () => {
    deleteHero(id)
  }
  return (
    <div className={styles.card}>
      <div className={styles.titleDiv}>
        <h3 className={styles.title}>{name}</h3>
      </div>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={image}
          alt={`imagen superheroe ${name}`}
        />
      </div>
      <div className={styles.descriptionDiv}>
        <ul className={styles.description}>
          <li>Intelligence: {intelligence}</li>
          <li>strength: {strength}</li>
          <li>speed: {speed}</li>
          <li>durability: {durability}</li>
          <li>power: {power}</li>
          <li>combat: {intelligence}</li>
        </ul>
      </div>
      <hr className={styles.hr}></hr>
      <div className="bottom_card">
      <Link style={{ textDecoration: "none", color: "inherit" }} to={`/Heroe/${id}`}>
        <button className={styles.button}>Info</button>
      </Link>
        <button className={styles.button} onClick={onRemove}>Remover</button>
      </div>
    </div>
  );
};

export default Cards;

// onClick={deleteHero(id)}

// <Link style={{ textDecoration: "none", color: "inherit" }} to={`/Heroe/${id}`}>
//           <button className={styles.button}>
//             Info
//           </button>
// </Link>
