import React from "react";
import SearchCards from "../../SearchCards/SearchCards";
import "./CardContainer.css";

const CardContainer = ({ heroData }) => {

  return (
    <div className="cardContainer">      
      {heroData.map((heroe) => {
        return (
          <div>
            <SearchCards              
              name={heroe.name}
              image={heroe.image.url}     
              id={heroe.id}         
              heroData={heroData}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CardContainer;
