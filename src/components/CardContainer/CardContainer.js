import React from 'react'
import Cards from '../Cards/Cards'
import './CardContainer.css'

const CardContainer = ({data}) => {
    return (
        <div className='cardContainer'>
            {data.map((heroe) =>{
                return(
                    <div>
                      <Cards
                          id={heroe.id}
                          name={heroe.name}
                          image={heroe.image.url}
                          intelligence={heroe.powerstats.intelligence}
                          strength={heroe.powerstats.strength}
                          speed={heroe.powerstats.speed}
                          durability={heroe.powerstats.durability}
                          power={heroe.powerstats.power}
                          combat={heroe.powerstats.combat}                                                  
                          />
                    </div>        
                )
            })}
            
        </div>
    )
}

export default CardContainer
