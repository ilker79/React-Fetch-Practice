import React, { useState, useReducer, useEffect } from "react";
import "../App/App.css";

function Pokemon({id1 = 25, id2 = 45}) {
  const [pokemon1, setPokemon1] = useState();
  const [pokemon2, setPokemon2] = useState();

  useEffect(() => {
    getPokemon1();
    getPokemon2();
  }, [id1]);

  async function getPokemon1() {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id1}`);
    let data = await res.json();
    // console.log(data);
    setPokemon1(data.sprites.front_default);
  }

  async function getPokemon2() {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id2}`);
    let data = await res.json();
    // console.log(data);
    setPokemon2(data.sprites.front_default);
  }

  return(
    <div className="container">
      <div className ="pokemon-1"><img  src={pokemon1} alt="pokemon1"/></div>
      <div className ="pokemon-2"><img  src={pokemon2} alt="pokemon1"/></div>
    </div>  
  )


}

export default Pokemon;
