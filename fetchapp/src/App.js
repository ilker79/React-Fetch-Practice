import React, { useState, useReducer, useEffect } from "react";

import logo from './logo.svg';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState();
const [joke,setJoke] = useState();
useEffect(() => {
  getPokemon();
  getJoke();
}, [])

async function getPokemon() {
  let res = await fetch ("https://pokeapi.co/api/v2/pokemon/1/");
  let data = await res.json();
  console.log(data);
  setPokemon(data.sprites.front_default);
}


async function getJoke() {
  let res = await fetch("https://icanhazdadjoke.com/", {
    headers: { accept: "application/json" },
  });
  let data = await res.json();
  console.log(data);
  setJoke(data.joke);
}



  return (
    <div className="App">
      <img src = {pokemon}/>
    </div>
  );
}

export default App;
