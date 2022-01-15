import React from "react";
import "./CardSearchContainer.css";
import styles from "../../Cards/Cards.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CardContainer from "../CardContainer/CardContainer";

const CardSearchContainer = () => {
  const [heroData, setHeroData] = useState([]);  
  const [isLoaded, setIsLoaded] = useState(false);
  const [heroName, setHeroName] = useState("");  
  const [searchError, setSearchError] = useState(false)

  const buscar = () => {
    
    axios
      .get(`http://localhost:3004/search/${heroName}`)
      .then((result) => {
        if (result && result.data.response !== "error") {
          let heroes = result.data.results;
          setHeroData(heroes);
          setIsLoaded(true);
          console.log(result.data.response)
          setSearchError(false)
        }else{
            setSearchError(true)
            setHeroData(false)
            console.log('no se ecnotrno')
        }
      })
      .catch((err) => {
        console.log(err);
        console.log('Se rompio todo')
      });
    // return () => {
    //   isMounted = false;
    // };
  };

  const handleData = (e) => {
    e.preventDefault();
    let inputData = document.querySelector("#heroSearch").value;
    setHeroName(inputData);        
  };

  useEffect(() => {
    heroName !== '' && buscar()    
  }, [heroName])

  return (
    <div className="heroSearchContainer">      
      <form onSubmit={handleData} className="heroSearch">
        <label htmlFor="heroSearch">Buscá a tu superheroe</label>
        <input id="heroSearch" name="heroSearch" type="text"></input>
        <input
          id="heroSearchReady"
          name="heroSearchReady"
          type="submit"
          value="Buscar heroe"
          className="searchButton"
        ></input>
      </form>
      {/* {searchError && <span> Hero no encontrado</span>} */}
      {heroData ? (
        <CardContainer heroData={heroData} />
      ) : (
        <p className="notFound">Heroe no encontrado</p>
      )}
    </div>
  );
};

export default CardSearchContainer;


