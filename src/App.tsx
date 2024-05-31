import Players from "./components/Players"
import GameHeader from "./components/GameHeader"
import GameBoard from "./components/GameBoard"
import { useState } from "react"
import GameStatus from "./components/GameStatus"

function App() {  
  const [ activePlayer, setActivePlayer ] = useState<'X' | 'O' | null>('X')  
  const [ gameBoard, setGameBoard ] = useState<('X' | 'O' | null)[]>([null, null, null, null, null, null, null, null, null])

  const row1 = [0, 1, 2]
  const row2 = [3, 4, 5]
  const row3 = [6, 7, 8]
  
  const col1 = [0, 3, 6]
  const col2 = [1, 4, 7]
  const col3 = [2, 5, 8]

  const diagonal1 = [0, 4, 8]
  const diagonal2 = [2, 4, 6]

  const { gameStatus, gameResult, buttonsToHighlight } = checkBoard()
  
  function handleButtonClick(index: number) {
    if (gameStatus === 'over') return;
    if (gameBoard[index]) return;

    setGameBoard((previousGameBoard)=> {
      const newGameBoard = [...previousGameBoard]
      newGameBoard[index] = activePlayer
      return newGameBoard
    })

    setActivePlayer((previousActivePlayer)=> {
      return previousActivePlayer === 'X' ? 'O' : 'X'
    })    
  }

  function checkBoard(): { gameStatus: 'active' | 'over', gameResult: null | 'player1Won' | 'player2Won' | 'draw', buttonsToHighlight: number[] } {    
    const row1Winner = getLineWinner(row1)
    if (row1Winner) {
      return { gameStatus: 'over', gameResult: row1Winner === 'X' ? 'player1Won' : 'player2Won', buttonsToHighlight: row1 } 
    }

    const row2Winner = getLineWinner(row2)
    if (row2Winner) {
      return { gameStatus: 'over', gameResult: row2Winner === 'X' ? 'player1Won' : 'player2Won', buttonsToHighlight: row2 } 
    }

    const row3Winner = getLineWinner(row3)
    if (row3Winner) {
      return { gameStatus: 'over', gameResult: row3Winner === 'X' ? 'player1Won' : 'player2Won', buttonsToHighlight: row3 } 
    }

    const col1Winner = getLineWinner(col1)
    if (col1Winner) {
      return { gameStatus: 'over', gameResult: col1Winner === 'X' ? 'player1Won' : 'player2Won', buttonsToHighlight: col1 } 
    }

    const col2Winner = getLineWinner(col2)
    if (col2Winner) {
      return { gameStatus: 'over', gameResult: col2Winner === 'X' ? 'player1Won' : 'player2Won', buttonsToHighlight: col2 } 
    }

    const col3Winner = getLineWinner(col3)
    if (col3Winner) {
      return { gameStatus: 'over', gameResult: col3Winner === 'X' ? 'player1Won' : 'player2Won', buttonsToHighlight: col3 } 
    }

    const diagonal1Winner = getLineWinner(diagonal1)
    if (diagonal1Winner) {
      return { gameStatus: 'over', gameResult: diagonal1Winner === 'X' ? 'player1Won' : 'player2Won', buttonsToHighlight: diagonal1 } 
    }

    const diagonal2Winner = getLineWinner(diagonal2)
    if (diagonal2Winner) {
      return { gameStatus: 'over', gameResult: diagonal2Winner === 'X' ? 'player1Won' : 'player2Won', buttonsToHighlight: diagonal2 } 
    }

    if (gameBoard.every(value => !!value)) {     
      return { gameStatus: 'over', gameResult: 'draw', buttonsToHighlight: [] } 
    }

    return {
      gameStatus: 'active',
      gameResult: null,
      buttonsToHighlight: []
    }
  }

  function getLineWinner(line: number[]): 'X' | 'O' | null {
    if (line.every(index => gameBoard[index] === 'X')) return 'X';
    if (line.every(index => gameBoard[index] === 'O')) return 'O';
    return null
  }

  return (
    <>
      <GameHeader />
      <main>
        <GameStatus gameStatus={gameStatus} gameResult={gameResult} />
        <Players gameStatus={gameStatus} activePlayer={activePlayer} />
        <GameBoard gameStatus={gameStatus} gameBoard={gameBoard} buttonsToHighlight={buttonsToHighlight} onButtonClick={handleButtonClick} />
      </main>
    </>
  )
}

export default App
