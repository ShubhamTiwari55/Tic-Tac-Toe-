import { useState } from "react";
import Card from "../Card/Card";
import './Grid.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function isWinner(board, symbol){
    if(board[0]==board[1] && board[1]==board[2] && board[2]==symbol) return symbol;
    if(board[3]==board[4]&& board[4]==board[5] && board[5]==symbol) return symbol;
    if(board[6]==board[7] && board[7]==board[8] && board[8]==symbol) return symbol;

    if(board[0]==board[3] && board[3]==board[6] && board[6]==symbol) return symbol;
    if(board[1]==board[4] && board[4]==board[7] && board[7]==symbol) return symbol;
    if(board[2]==board[5] && board[5]==board[8] && board[8]==symbol) return symbol;
    
    if(board[0]==board[4] && board[4]==board[8] && board[8]==symbol) return symbol;
    if(board[3]==board[4] && board[4]==board[6] && board[6]==symbol) return symbol;
    return null;
}

function Grid({numberOfCards}){
    const [turn, setTurn] = useState(true); //false -> x, true -> O//
    const [board, setBoard] = useState(Array(numberOfCards).fill("")); // ["", "", "",...] 
    const [winner, setWinner] = useState(null);
    function play(index){
        console.log('move played', index);
        if(turn==true) board[index] = "O";
        else board[index]="X";
        const win = isWinner(board, turn ? "O": "X");
        if(win){
            setWinner(win);
            toast.success(`Congratulations! ${win} won the game :)`)
        }
        setBoard([...board]);
        setTurn(!turn);
    }

    //we can use a hook useCallback to optimise so that the play function don't re-render upon thr=e grid everytime//
    
    function reset(){
        setBoard(Array(numberOfCards).fill(""));
        setWinner(null);
        setTurn(true);
    }
    return(
    <div className="grid-wrapper"> 
    {winner && (
        <>
         <h1 className="winn"> Winner of the game is {winner}</h1> 
         <button className="btn" onClick={reset}>Reset Game</button>
         <ToastContainer position="top-center"/>
        </>
    )}
    <h1 className="turn-highlight">Current Turn: {(turn) ? 'O' : 'X'} </h1>
    <div className="grid"> 
   {board.map((el, idx)=>{
    return <Card gameEnd={winner? true: false} onPlay = {play} player ={el} index = {idx} key={idx} />})}
    </div>
    </div>
   
   
)
}
export default Grid;
