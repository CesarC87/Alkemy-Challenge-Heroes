import React, { useContext } from "react";
import Header from "../Header/Header";
import CardSearchContainer from "../Containers/CardSearchContainer/CardSearchContainer";
import AddedHeroes from "../AddedHeroes/AddedHeroes";
import { Link } from 'react-router-dom'
import { HeroContext } from "../../context/TeamContext";

const Home = () => {
  
  const loggedOut = () => {
    localStorage.removeItem('email', process.env.REACT_APP_USER_EMAIL)
    localStorage.removeItem('password', process.env.REACT_APP_USER_PASS)
  }
return (
    <>    
      <Header />         
      <AddedHeroes/>
      <CardSearchContainer />    
      <Link to='/'>
        <button className="ingresar" onClick={() => loggedOut()}>Log Out</button>
      </Link>
   </>
  );
};

export default Home;

