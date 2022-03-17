import React from "react";
import "./hero.style.css";

const Hero = (props) => (
  <div className="superhero-container">
    <img alt="hero" src={props.heroImage.lg} />
    <h1> {props.heroName} </h1>
    <h2>{props.publisher.publisher}</h2>
    {/* {console.log(props.heroImage.xs)} */}
  </div>
);

export default Hero;
