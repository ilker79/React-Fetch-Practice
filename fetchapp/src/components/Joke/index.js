import React, { useState, useReducer, useEffect } from "react";

function Joke() {
  const [joke, setJoke] = useState();
  useEffect(() => {
    getJoke();
  }, []);

  async function getJoke() {
    let res = await fetch("https://icanhazdadjoke.com/", {
      headers: { accept: "application/json" },
    });
    let data = await res.json();
    console.log(data);
    setJoke(data.joke);
  }

  return <div>{joke}</div>;
}

export default Joke;
