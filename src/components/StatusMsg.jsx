import React from 'react';

const StatusMsg = ({ winner, current }) => {
  // const Message = winner
  // ? `Winner is ${winner}`
  // : `Next Player is ${current.isXNext ? 'X' : '0'}`;
  const noMovesLeft = current.board.every(el => el !== null);
  return (
    <div className=".status-message">
      {winner && (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          Next Player is{' '}
          <span className={current.isXNext ? 'text-green' : 'text-orange'}>
            {current.isXNext ? 'X' : '0'}{' '}
          </span>
        </>
      )}
      {!winner && noMovesLeft && 'Draw'}
    </div>
  );
};
export default StatusMsg;
