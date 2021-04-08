import React, { useState, useEffect, useReducer } from "react";
import List from "../List";
import "../App/App.css";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "WINNER_1":
      return action.value;
    case "WINNER_2":
      return action.value;
    default:
      return state;
  }
}

function WinnerList({ getJoke1, getJoke2 }) {
  // const [winner, setWinner]= useState ([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    addToList1();
    addToList2();
  }, []);

  //  function addToList1(){
  //      let addWinnerToArray = [...winner, getJoke1];
  //      setWinner(addWinnerToArray);

  //  }
  //   function addToList2() {
  //     let addWinnerToArray = [...winner, getJoke2];
  //     setWinner(addWinnerToArray);
  //   }

  function addToList1() {
    let addWinner1ToArray = [...state, getJoke1];
    return addWinner1ToArray;
  }
  function addToList2() {
    let addWinner2ToArray = [...state, getJoke2];
    return addWinner2ToArray;
  }

  return (
    <div className="box">
      {/* <button onClick={(e) => addToList1(e.target.value)}>Add To List</button> */}
      <div >
      <button className="addToL1"
        onClick={() => dispatch({ type: "WINNER_1", value: addToList1() })}
      > 
        Add left To List
      </button>
      {/* <button onClick={(e) => addToList2(e.target.value)}>Add To List</button> */}
      </div>
      <div >
      <button className="addToL2"
        onClick={() => dispatch({ type: "WINNER_2", value: addToList2() })}
      >
        Add Right To List
      </button>
      </div>
      <div>
      <List winner={state} />
      </div>
    </div>
  );
}

export default WinnerList;
