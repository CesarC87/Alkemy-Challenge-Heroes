import React, { Component } from "react";
import Slider from "react-slick";
import Cards from "../Cards/Cards";
import "./CustomArrows.css"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  
  render(props) {    
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 2,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,      
    };     
   
    return (
      <div className="CustomArrowsContainer">
        <h4 className="h4Slider">Elegí tu experiencia</h4>
        <Slider {...settings}>               
        {this.props.data?.map((heroe) => {
                return (
                    <div>
                      <Cards
                          id={heroe.id}
                          name={heroe.name}
                          image={heroe.image.url}
                          intelligence={heroe.powerstats.intelligence}
                          strength={heroe.powerstats.strength}
                          speed={heroe.powerstats.speed}
                          durability={heroe.powerstats.durability}
                          power={heroe.powerstats.power}
                          combat={heroe.powerstats.combat}                         
                          />
                    </div>                    
                )
            })}   
        </Slider>
      </div>
    );
  }
}
