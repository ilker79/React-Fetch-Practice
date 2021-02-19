import React, { useState, useReducer, useEffect } from "react";

function Pokemon() {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    getPokemon();
  }, []);

  async function getPokemon() {
    let res = await fetch("https://pokeapi.co/api/v2/pokemon/1/");
    let data = await res.json();
    console.log(data);
    setPokemon(data.sprites.front_default);
  }

  return(
      <img src={pokemon}/>
  )


}

export default Pokemon;
