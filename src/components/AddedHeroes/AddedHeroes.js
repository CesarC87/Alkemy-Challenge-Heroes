import React , {useContext} from 'react'
import { HeroContext } from '../../context/TeamContext'
import { Link } from 'react-router-dom'
import RadarData from '../RadarData/RadarData'
import Cards from '../Cards/Cards'
import './AddedHeroes.css'

const AddedHeroes = () => {

    const {team, totalWeight, totalHeight, MaxStats} = useContext(HeroContext)      

    if(team.length === 0) {
        return (
          <div>
            <h2 className="h2Vacio">Aún no hay miembros</h2>            
          </div>
        ) 
        }else {
            return (
                <>
                <div className='teamDetailContainer'>
                    <div className='heightAndweight'>
                        <h2 className='tuEquipo'>Tu equipo</h2>
                        <span>Peso promedio: <br></br>{Math.round(totalWeight()/team.length)} kg</span>
                        <span>Altura promedio: <br></br>{Math.round(totalHeight()/team.length)} cm</span>
                        <span>Cualidad destacada:</span>
                        <span className='bestStat'>{MaxStats}</span>
                    </div>     
                    
                    <RadarData/>
                </div>
                <div className='addedHeroes'>                      
                    {team.map((heroe) =>{
                        return(
                            
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
                                  alignment={heroe.biography.alignment}                                           
                                  />
                                  
                        )
                    })}               
                </div>
                </>
                
            )
        }

}

export default AddedHeroes
