import  React,  { useState, useEffect, useReducer} from "react";



function WinnerList ({getJoke}){
const [winner, setWinner]= useState ([]);

useEffect(() => {
    addToList();
  },[]);

 function addToList(){
     let addWinnerToArray = [...winner, getJoke];
     setWinner(addWinnerToArray);
    
 }
 console.log(winner);

return(
<button onClick={(e) => addToList(e.target.value)}>Add To List</button>
)

}

export default WinnerList;