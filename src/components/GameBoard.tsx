import styles from "./GameBoard.module.css"
import GameBoardButton from "./GameBoardButton"

type GameBoardProps = {
  gameStatus: 'active' | 'over';
  gameBoard: ('X' | 'O' | null)[];
  buttonsToHighlight: number[];
  onButtonClick: (index: number) => void;
}

export default function GameBoard({ gameStatus, gameBoard, buttonsToHighlight, onButtonClick }: GameBoardProps) {   
    return (
      <section>
        <div className={styles.gameBoard}>          
          {             
            [...Array(9).keys()].map((index) => (              
              <GameBoardButton
                key={index} 
                gameStatus={ gameStatus } 
                index={ index } 
                value={ gameBoard[index] } 
                highlight={buttonsToHighlight.some(hl => hl === index)} 
                onClick={ (index) => onButtonClick(index) } />
            )) 
          }         
        </div>
      </section>
    )
}