import styles from "./GameStatus.module.css"

type GameStatusProps = {  
  gameStatus: 'active' | 'over';
  gameResult: null | 'player1Won' | 'player2Won' | 'draw';
}

export default function GameStatus({ gameStatus, gameResult }: GameStatusProps) {    
    let message = 'Let\'s play!';   
    let paragraphClasses = undefined;

    if (gameStatus === 'over') {
      if (gameResult === 'player1Won') { 
        message = 'Player 1 is the winner'
        paragraphClasses = styles.win
      }

      if (gameResult === 'player2Won') {
        message = 'Player 2 is the winner'
        paragraphClasses = styles.win
      }

      if (gameResult === 'draw') {
        message = 'Draw'
        paragraphClasses = styles.draw
      }
    }

    return (
      <section className={styles.gameStatus}>
        <p className={paragraphClasses}>{ message }</p>        
      </section>
    )
}