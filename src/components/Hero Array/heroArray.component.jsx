import React from "react";
import "./heroArray.style.css";
import Hero from "../Hero/hero.component";

const HeroArray = (props) => (
  <div className="heroArray">
    {props.hero.map((hero) => (
      <Hero
        key={hero[0]}
        heroName={hero[1]}
        heroImage={hero[2]}
        publisher={hero[3]}
      />
    ))}
  </div>
);
export default HeroArray;
