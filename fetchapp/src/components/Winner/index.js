import  React,  { useState, useEffect, useReducer} from "react";
import List from "../List"


function WinnerList ({getJoke1, getJoke2}){
const [winner, setWinner]= useState ([]);

useEffect(() => {
    addToList1();
      addToList2();
  },[]);

 function addToList1(){
     let addWinnerToArray = [...winner, getJoke1];
     setWinner(addWinnerToArray);
    
 }
  function addToList2() {
    let addWinnerToArray = [...winner, getJoke2];
    setWinner(addWinnerToArray);
  }


return (
  <div>
    <button onClick={(e) => addToList1(e.target.value)}>Add To List</button>
    <button onClick={(e) => addToList2(e.target.value)}>Add To List</button>
    <List winner={winner} />
  </div>
);

 
}

export default WinnerList;