import React, { useState, useReducer, useEffect } from "react";

function Pokemon({id}) {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    getPokemon();
  }, [id]);

  async function getPokemon() {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let data = await res.json();
    console.log(data);
    setPokemon(data.sprites.front_default);
  }

  return(
      <img src={pokemon}/>
  )


}

export default Pokemon;
