import  React,  { useState, useEffect, useReducer} from "react";
import List from "../List"


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
    <div>
        <button onClick={(e) => addToList(e.target.value)}>Add To List</button>
        <List winner = {winner}/>
</div>
)

}

export default WinnerList;