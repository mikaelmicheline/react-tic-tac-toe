import { useState } from "react"
import styles from "./GameBoard.module.css"
import GameBoardButton from "./GameBoardButton"

export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState<(string | null)[]>([null, null, null, null, null, null, null, null, null])

    function handleClickButton(index: number) {
      setGameBoard((previousGameBoard)=> {
        const newGameBoard = [...previousGameBoard]
        newGameBoard[index] = 'A'
        return newGameBoard
      })
    }

    return (
      <section>
        <div className={styles.gameBoard}>          
          <GameBoardButton index={0} value={gameBoard[0]} handleClickButton={handleClickButton} />
          <GameBoardButton index={1} value={gameBoard[1]} handleClickButton={handleClickButton} />
          <GameBoardButton index={2} value={gameBoard[2]} handleClickButton={handleClickButton} />
          <GameBoardButton index={3} value={gameBoard[3]} handleClickButton={handleClickButton} />
          <GameBoardButton index={4} value={gameBoard[4]} handleClickButton={handleClickButton} />
          <GameBoardButton index={5} value={gameBoard[5]} handleClickButton={handleClickButton} />
          <GameBoardButton index={6} value={gameBoard[6]} handleClickButton={handleClickButton} />
          <GameBoardButton index={7} value={gameBoard[7]} handleClickButton={handleClickButton} />
          <GameBoardButton index={8} value={gameBoard[8]} handleClickButton={handleClickButton} />
        </div>
      </section>
    )
}