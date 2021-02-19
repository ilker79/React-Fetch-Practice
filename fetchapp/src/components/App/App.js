import React, { useState, useReducer, useEffect } from "react";

// import logo from './logo.svg';
import './App.css';
import Pokemon from "../Pokemon";
import Joke from "../Joke";

function App() {
  const [id1, setId1] = useState();
  const [id2, setId2] = useState();

  function handleClick(){
  let random1=  Math.floor(Math.random( )* Math.floor(649)) 
   setId1(random1);
   let random2=  Math.floor(Math.random( )* Math.floor(649)) 
    setId2(random2);
}


// function addWinnerToList(winner){
// const newWinnersList = 


//}

  return (
    <div className="App">
    <button onClick = {(e) => handleClick(e.target.value)}>Click for random Pokemon and Joke</button>
      <Joke id = {id1}  />
      <Pokemon id1 = {id1} id2 ={id2} />
    </div>
  );
}

export default App;
