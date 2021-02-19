import React, { useState, useReducer, useEffect } from "react";

import logo from './logo.svg';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState();

useEffect(() => {
  getPokemon();
}, [])

async function getPokemon() {
  let res = await fetch ("https://pokeapi.co/api/v2/pokemon/1/");
  let data = await res.json();
  console.log(data);
  setPokemon(data.sprites.front_default);
}

  return (
    <div className="App">
      <img src = {pokemon}/>
    </div>
  );
}

export default App;
