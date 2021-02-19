import React, { useState, useReducer, useEffect } from "react";

// import logo from './logo.svg';
import './App.css';
import Pokemon from "../Pokemon";
import Joke from "../Joke";

function App() {
  const [id, setId] = useState();

  function handleClick(){
  let random=  Math.floor(Math.random( )* Math.floor(649)) 
   setId(random);
}


  return (
    <div className="App">
    <button onClick = {(e) => handleClick(e.target.value)}>Click for random Pokemon and Joke</button>
      <Joke id = {id} />
      <Pokemon id = {id} />
    </div>
  );
}

export default App;
