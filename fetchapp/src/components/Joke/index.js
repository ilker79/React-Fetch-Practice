import React, { useState, useReducer, useEffect } from "react";
import WinnerList from "../Winner";

function Joke({id} ) {
const [joke1, setJoke1] = useState();
const [joke2, setJoke2] = useState();

  useEffect(() => {
    getJoke1();
    getJoke2();
  }, [id]);

  async function getJoke1() {
    let res = await fetch(`https://icanhazdadjoke.com/`, {
      headers: { accept: "application/json" },
    });
    let data = await res.json();
    // console.log(data);
    setJoke1(data.joke);
  }
 async function getJoke2() {
   let res = await fetch(`https://icanhazdadjoke.com/`, {
     headers: { accept: "application/json" },
   });
   let data = await res.json();
   // console.log(data);
   setJoke2(data.joke);
 }
  return (
  <div>
  <div>
  {joke1}
  </div>
  <div>{joke2}</div>
  <WinnerList getJoke1={joke1} getJoke2= {joke2}/>
  </div>
  )
}

export default Joke;
