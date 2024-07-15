import Card from "../Card/Card"
import './Grid.css'
import React, { useEffect, useState } from "react";
function Grid({numberOfCards}){


      const [turn,setTurn]= useState(true);


    function Play(){
        console.log("movePlayed")
         setTurn(!turn);
    };

    return (
        <>
         <h1 className="highLight">
             Current Turn:{(turn)?'O':'X'} 
        </h1>

        <div className="grid">
        {Array(numberOfCards).fill(<Card/>).map((el,idx)=>{
            return <Card onPlay={Play} key={idx}/>
        })}

        
        </div>
        
        
        </>
       
    )

}

export default Grid