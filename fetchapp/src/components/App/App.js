import React, { useState, useReducer, useEffect } from "react";

// import logo from './logo.svg';
import './App.css';
import Pokemon from "../Pokemon";
import Joke from "../Joke";

function App() {
  



  return (
    <div className="App">
      <Joke />
      <Pokemon />
    </div>
  );
}

export default App;
