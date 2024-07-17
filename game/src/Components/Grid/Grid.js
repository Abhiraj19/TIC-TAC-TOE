import Card from "../Card/Card"
import './Grid.css'
import React, { useEffect, useState } from "react";


function isWinner(board,symbol){
    if(board[0]==board[1]&&board[1]==board[2]&&board[2]==symbol) return symbol;
    if(board[3]==board[4]&&board[4]==board[5]&&board[5]==symbol) return symbol;
    if(board[6]==board[7]&&board[7]==board[8]&&board[8]==symbol) return symbol;

    if(board[0]==board[3]&&board[3]==board[6]&&board[6]==symbol) return symbol;
    if(board[1]==board[4]&&board[4]==board[7]&&board[7]==symbol) return symbol;
    if(board[2]==board[5]&&board[5]==board[8]&&board[8]==symbol) return symbol;

    if(board[0]==board[4]&&board[4]==board[8]&&board[8]==symbol) return symbol;
    if(board[2]==board[4]&&board[4]==board[6]&&board[6]==symbol) return symbol;
    return "";

  }
  function isTie(board) {
    return board.every(cell => cell !== "");
}


function Grid({numberOfCards}){


      const [turn,setTurn]= useState(true);
      const [board,setBoard]=useState(Array(numberOfCards).fill(""));
      const [winner,setWinner]=useState(null);
      const [tie, setTie] = useState(false);;

    function Play(index){
        console.log("movePlayed",index)
        if (turn==true){
            board[index]='O'
        }else{
            board[index]='X'
        }
        const win=isWinner(board,turn?'O':'X')
        if (win) {
            setWinner(win);
        } else if (isTie(board)) {
            setTie(true);
        }

        setBoard([...board])
        setTurn(!turn);
    };
    function reset(){
        setBoard(Array(numberOfCards).fill(""));
        setWinner(null);
        setTie(false);
        setTurn(true);
       
    }

    return (
        <>
        {winner&& (
            <>
            <h1 className="winner-high">Winner is {winner}</h1>
            <button onClick={reset}>
             Reset Game

            </button>
            </>
            )}

{tie && !winner && (
                <>
                    <h1 className="winner-high">No one is Winner, It's a Tie!</h1>
                    <button onClick={reset}>
                        Reset Game
                    </button>
                </>
            )}


    

            
          

         <h1 className="highLight">
             Current Turn:{(turn)?'O':'X'} 
        </h1>

        <div className="grid">
        {board.map((value,idx)=>{
            return <Card  gameEnd={winner?true:false} onPlay={Play} player={value} key={idx} index={idx}/>
        })}

        
        </div>
        
        
        </>
       
    )

}

export default Grid