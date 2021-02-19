import React from "react";



function List({winner}) {
    return (
        <div className="list">
            <ul>
            {winner.map((item, index) => (
                <li key={index}>{item} 
                
            
                </li>
            ))}
            </ul> 
        </div>

    )
}

export default List;