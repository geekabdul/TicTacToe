import React from 'react';

const StatusMsg = ({ winner, current }) => {
  // const Message = winner
  // ? `Winner is ${winner}`
  // : `Next Player is ${current.isXNext ? 'X' : '0'}`;
  const noMovesLeft = current.board.every(el => el !== null);

  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !noMovesLeft &&
        `Next Player is ${current.isXNext ? 'X' : '0'}`}
      {!winner && noMovesLeft && 'Draw'}
    </h2>
  );
};
export default StatusMsg;
