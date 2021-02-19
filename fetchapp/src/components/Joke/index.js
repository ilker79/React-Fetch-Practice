import React, { useState, useReducer, useEffect } from "react";
import WinnerList from "../Winner";

function Joke( {id} ) {
const [joke, setJoke] = useState();
  
  useEffect(() => {
    getJoke();
  }, [id]);

  async function getJoke() {
    let res = await fetch(`https://icanhazdadjoke.com/`, {
      headers: { accept: "application/json" },
    });
    let data = await res.json();
    // console.log(data);
    setJoke(data.joke);
  }

  
  return (
  <div>
  {joke}
  <WinnerList getJoke={joke}/>
  </div>
  )
}

export default Joke;
