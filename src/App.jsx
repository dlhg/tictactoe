import { useState } from "react";
import "./App.css";

function App() {
  const [turnCount, setTurnCount] = useState(0);
  const [whoseTurn, setWhoseTurn] = useState("X");
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xWins, setXWins] = useState(0);
  const [oWins, setOWins] = useState(0);
  const [draws, setDraws] = useState(0);

  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function checkForWin(newBoard) {
    for (let condition of winConditions) {
      const [a, b, c] = condition;
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        return newBoard[a];
      }
    }
    return null;
  }

  function takeTurn(index) {
    if (board[index] === null) {
      const newBoard = [...board];
      newBoard[index] = whoseTurn;
      setBoard(newBoard);
      setTurnCount(turnCount + 1);
      setWhoseTurn(whoseTurn === "X" ? "O" : "X");
      console.log(newBoard);
      if (turnCount + 1 >= 5) {
        const winner = checkForWin(newBoard);
        if (winner) {
          console.log(`winner is ${winner}`);
          winner === "X"
            ? setXWins((prev) => prev + 1)
            : setOWins((prev) => prev + 1);
          resetBoard();
        } else if (turnCount === 8) {
          console.log("draw!");
          setDraws((prev) => prev + 1);
          resetBoard();
        }
      }
    }
  }

  function resetBoard() {
    setTurnCount(0);
    setWhoseTurn("X");
    setBoard(Array(9).fill(null));
  }

  function resetEverything() {
    setTurnCount(0);
    setWhoseTurn("X");
    setBoard(Array(9).fill(null));
    setXWins(0);
    setOWins(0);
    setDraws(0);
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
        <button onClick={resetBoard}>Reset Board</button>
        <button onClick={resetEverything}>Reset Everything</button>
      </div>
    </>
  );
}

export default App;
