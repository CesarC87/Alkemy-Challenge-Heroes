import React from "react";
import Header from "../Header/Header";
import CardSearchContainer from "../Containers/CardSearchContainer/CardSearchContainer";
import AddedHeroes from "../AddedHeroes/AddedHeroes";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { loggedOut } = useAuth();

  return (
    <>
      <Header />
      <AddedHeroes />
      <CardSearchContainer />
      <Link to="/">
        <button className="ingresar" onClick={loggedOut}>
          Log Out
        </button>
      </Link>
    </>
  );
};

export default Home;
