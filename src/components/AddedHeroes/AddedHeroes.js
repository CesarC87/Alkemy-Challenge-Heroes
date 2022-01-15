import React , {useContext} from 'react'
import { HeroContext } from '../../context/TeamContext'
import { Link } from 'react-router-dom'
import Cards from '../Cards/Cards'
import './AddedHeroes.css'

const AddedHeroes = () => {

    const {team} = useContext(HeroContext)  

    if(team.length === 0) {
        return (
          <div>
            <h2 className="h2Vacio">Buscá y agregá tus heroes</h2>            
          </div>
        ) 
        }else {
            return (
                <div className='addedHeroes'>       
                {console.log(team)}     
                    {team.map((heroe) =>{
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

}

export default AddedHeroes
