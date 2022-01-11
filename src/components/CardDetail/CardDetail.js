import React from 'react'
import './CardDetail.css'
import { useParams } from 'react-router-dom'

const CardDetail = ({heroData}) => {
    const { id } = useParams();

    return (
        <div className='cardDetail'>
            {console.log(heroData.biography)}
           <ul> 
               <li>Full Name: {heroData.biography}</li>
           </ul>
        </div> 
    )
}
  
export default CardDetail

// {heroData.biography["full-name"]}