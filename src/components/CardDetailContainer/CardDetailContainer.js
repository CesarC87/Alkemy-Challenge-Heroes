import React from "react";
import "./CardDetailContainer.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CardDetail from "../CardDetail/CardDetail";

const CardDetailContainer = () => {
  const [heroData, setHeroData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    axios
      .get(`http://localhost:3004/${id}`)
      .then((result) => {
          if(isMounted){
              setHeroData(result.data.biography['full-name']);              
          }
      }) 
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {         
        setLoading(false);
      });
      return () => { isMounted = false}
  }, []);
 
  return (
    <div>
        {console.log(heroData)} 
      <CardDetail 
        heroData={heroData}
         />
    </div>
  );
};

export default CardDetailContainer;
