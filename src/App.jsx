import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './helper';
import './styles/root.scss';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsNext] = useState(false);

  const winner = calculateWinner(board);
  // console.log(winner);
  const Message = winner
    ? `Winner is ${winner}`
    : `Next Player is ${isXNext ? 'X' : '0'}`;

  const handleSquareClick = position => {
    if (board[position] || winner) {
      return;
    }
    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? 'X' : '0';
        }
        return square;
      });
    });
    setIsNext(prev => {
      return !prev;
    });
  };
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{Message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};
export default App;
