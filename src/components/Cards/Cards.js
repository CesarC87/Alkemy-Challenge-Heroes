import React from 'react'
import styles from "./Cards.module.css";
// import { Link } from "react-router-dom"

const Cards = ({id, name, image, intelligence, strength, speed, durability, power, combat}) => {
    return (
        <div className={styles.card}>
            <div className={styles.titleDiv}>  
              <h3 className={styles.title}>{name}</h3> 
            </div>
              <div className={styles.imageContainer}>
                <img className={styles.image} src={image} alt={`imagen superheroe ${name}`}/>
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
                  <p className={styles.price}>$ Precio</p>
                <button className={styles.button}> 
                  Ver detalle
                </button>
          </div>
    )
}

export default Cards
