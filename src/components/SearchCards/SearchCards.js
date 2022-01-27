import React from 'react'
import styles from "./SearchCards.module.css";
import { Link } from "react-router-dom"
import { useState, useContext } from 'react'
import { HeroContext } from '../../context/TeamContext'

const SearchCards = ({name,image,id, heroData}) => {
    const {addHero, team, MaxReached, maxGoodreached, maxBadreached} = useContext(HeroContext);  

    const onAdd = (counter) => {          
        const selectedHero = heroData.filter(x => x.id === id)        
        addHero(...selectedHero)
    }      
  
    return (
        <div className={styles.card}>            
            <div className={styles.titleDiv}>  
              <h3 className={styles.title}>{name}</h3> 
            </div>
              <div className={styles.imageContainer}>
                <img className={styles.image} src={image} alt={`imagen superheroe ${name}`}/>
              </div>
              <hr className={styles.hr}></hr>
                  <div className='bottom_card'>
                    <button className={styles.button} onClick={onAdd}> 
                      Agregar a tu equipo
                    </button>
                  </div>
                  {MaxReached === true && <span className={styles.fullTeam}>Equipo completo</span>}
                  {maxGoodreached === true && <span className={styles.maxReached}>Máximo de héroes Buenos alcanzado. Agrega malos</span>}
                  {maxBadreached === true && <span className={styles.maxReached}>Máximo de héroes Malos alcanzado. Agrega buenos</span>}
          </div>
    )
}

export default SearchCards
