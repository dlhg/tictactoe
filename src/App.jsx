import { useState } from "react";
import "./App.css";

function App() {
  const [turnCount, setTurnCount] = useState(0);
  const [whoseTurn, setWhoseTurn] = useState("X");
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xWins, setXWins] = useState(0);
  const [oWins, setOWins] = useState(0);
  const [draws, setDraws] = useState(0);

  function takeTurn(index) {
    if (board[index] === null) {
      const newBoard = [...board];
      newBoard[index] = whoseTurn;
      setBoard(newBoard);
      setTurnCount(turnCount + 1);
      setWhoseTurn(whoseTurn === "X" ? "O" : "X");
      console.log(newBoard);
      if (turnCount + 1 >= 5) {
        console.log("checking for win");
        if (newBoard[2])

      }

      /*

        Minimum amount of turns required for a win = 5

        Win for either X or O:
        [2,4,6]
        [0,4,8]
        [0,3,6]
        [1,4,7]
        [2,5,8]
        [0,1,2]
        [3,4,5]
        [6,7,8]

        X wins:
        [null, null, 'X', null, 'X', null, 'X', null, null]
        ['X', null, null, null, 'X', null, null, null, 'X']
        ['X', null, null, 'X', null, null, 'X', null, null]
        [null, 'X', null, null, 'X', null, null, 'X', null]
        [null, null, 'X', null, null, 'X', null, null, 'X']
        ['X', 'X', 'X', null, null, null, null, null, null]
        [null, null, null, 'X', 'X', 'X', null, null, null]
        [null, null, null, null, null, null, 'X', 'X', 'X']


        Draw:
        Turn count === 9 && none of the above states have been reached

      */
    }
  }

  function reset() {
    setTurnCount(0);
    setWhoseTurn("X");
    setBoard(Array(9).fill(null));
  }

  return (
    <>
      <div id="container">
        <div>It is {whoseTurn}'s turn</div>
        <div>Turn count: {turnCount}</div>
        <div>X wins: {xWins}</div>
        <div>O wins: {oWins}</div>
        <div>Draws: {draws}</div>
        <br />
        <div id="board">
          {board.map((value, index) => (
            <div
              className="square"
              id={`square${index}`}
              key={index}
              onClick={() => takeTurn(index)}
            >
              {value}
            </div>
          ))}
        </div>
        <br />
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}

export default App;
