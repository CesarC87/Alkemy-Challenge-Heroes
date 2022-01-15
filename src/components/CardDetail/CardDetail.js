import React from 'react'
import './CardDetail.css'
import { useParams } from 'react-router-dom'

const CardDetail = ({heroData}) => {
    const { id } = useParams();

    return (        
        <div className='cardDetail'>        
            <div className='cardDetail__izq'>
                <ul>
                    <li>Hero name: {heroData.name}</li>
                    <li>Real Name: {heroData.biography['full-name']}</li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className='cardDetail__der'>
                <img src={heroData.image.url} alt={`imagen superheroe ${heroData.name}`}/>
            </div>
        </div> 
    )
}
  
export default CardDetail

        //    <ul> 
        //        <li>Full Name: {heroData.biography['full-name']}</li>
        //    </ul>