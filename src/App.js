import "./App.css";
import React, { Component, useEffect, useState } from "react";
import Hero from "./components/Hero/hero.component";
import HeroArray from "./components/Hero Array/heroArray.component";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       heroes: [],
//     };
//   }
//   componentDidMount() {
//     fetch("https://superhero-search.p.rapidapi.com/api/heroes", {
//       method: "GET",
//       headers: {
//         "x-rapidapi-host": "superhero-search.p.rapidapi.com",
//         "x-rapidapi-key": "056e727500msh4cb5a563ed5ba70p1afbf2jsn6d0e44b7d03a",
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => this.setState({ heroes: data }))
//       .catch((err) => {
//         console.error(err);
//       });
//   }

//   render() {
//     const { heroes } = this.state;
//     const hero = heroes.map((hero) => [
//       hero.id,
//       hero.name,
//       hero.images,
//       hero.biography,
//     ]);

//     return (
//       <div className="App">
//         <h1 className="Title">HEROES</h1>
//         <HeroArray hero={hero} />
//       </div>
//     );
//   }
// }

// export default App;

const App = () => {
  const [hero, setHero] = useState([]);

  useEffect(() => {
    fetch("https://superhero-search.p.rapidapi.com/api/heroes", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "superhero-search.p.rapidapi.com",
        "x-rapidapi-key": "056e727500msh4cb5a563ed5ba70p1afbf2jsn6d0e44b7d03a",
      },
    })
      .then((response) => response.json())
      .then((data) => setHero(data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const heroes = hero.map((hero) => [
    hero.id,
    hero.name,
    hero.images,
    hero.biography,
  ]);

  return (
    <div className="App">
      <h1 className="Title">HEROES</h1>
      <HeroArray hero={heroes} />
    </div>
  );
};

export default App;
