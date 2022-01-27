import React from 'react'
import './CardDetail.css'
import { useParams, Link } from 'react-router-dom'

const CardDetail = ({heroData}) => {
    const { id } = useParams();

    return (    
        <>           
        <div className='cardDetail'>        
            <div className='cardDetail__izq'>   
            <div className='cardDetail__izq--title'>
                <h1>{heroData.name}</h1>
            </div>
                <ul className='cardDetail__izq--description'>
                    <li>Hero name: {heroData.name}</li>
                    <li>Real Name: {heroData.biography['full-name']}</li>
                    <li>Weight: {heroData.appearance.weight[1]}</li>
                    <li>Height: {heroData.appearance.height[1]}</li>
                    <li>Eye color: {heroData.appearance['eye-color']}</li>
                    <li>Hair color: {heroData.appearance['hair-color']}</li>
                    <li>Work place: {heroData.work.base}</li>
                </ul>
            </div>
            <div className='cardDetail__der'>
                <img src={heroData.image.url} alt={`imagen superheroe ${heroData.name}`}/>
            </div>
        </div> 
        <Link style={{ textDecoration: "none", color: "inherit" }} to={`/Home`}>
        <button className='button'>Volver</button>
      </Link>
        </>
    )
}
  
export default CardDetail

        //    <ul> 
        //        <li>Full Name: {heroData.biography['full-name']}</li>
        //    </ul>