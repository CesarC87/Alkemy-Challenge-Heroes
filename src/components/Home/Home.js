import React from 'react'
import Header from '../Header/Header'
import CardContainer from '../CardContainer/CardContainer'
import axios from 'axios'
import { useState, useEffect } from 'react'


const Home = () => {    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)


    useEffect(() => {

        setLoading(true);

        axios.get(`http://localhost:3004`)
    .then(result => {
        let heroes = result.data.results
        console.log("esto es heroes:", heroes)
        setData(heroes.map((hero) => ({...hero})))        
    })
    .catch(err =>{
        console.log(err)
    }
    )
    .finally(() => {
        console.log("esto es data:", data)
        setLoading(false)
    })
    }, [])
    
    return (
        <div>
            <Header/>  
            Hola desde Home
            {loading && <p>Cargando...</p>}
            <CardContainer data={data}/>
        </div>
    )
}

export default Home
