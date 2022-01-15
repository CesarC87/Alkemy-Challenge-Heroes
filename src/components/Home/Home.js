import React from "react";
import Header from "../Header/Header";
import CardSearchContainer from "../Containers/CardSearchContainer/CardSearchContainer";
import axios from "axios";
import { useState, useEffect } from "react";
import AddedHeroes from "../AddedHeroes/AddedHeroes";

const Home = () => {
  
return (
    <div>
      <Header />                 
      {/* {isLoaded ? <AddedHeroes heroData={heroData} /> : <p className="cargando">Cargando...</p>} */}      
      <AddedHeroes/>
      <CardSearchContainer />
     
    </div>
  );
};

export default Home;

// setHeroData(heroes.map((hero) => ({ ...hero })));    