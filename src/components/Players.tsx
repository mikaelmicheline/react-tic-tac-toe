import Player from "./Player"
import styles from "./Players.module.css"

type PlayersProps = {
  gameStatus: 'active' | 'over';
  activePlayer: 'X' | 'O' | null;  
}

export default function Players({ gameStatus, activePlayer }: PlayersProps) {
    return (
      <section>
        <ol className={ styles.players }>
          <Player name="Player 1" symbol="X" active={ gameStatus === 'active' && activePlayer === 'X' } />
          <Player name="Player 2" symbol="O" active={ gameStatus === 'active' && activePlayer === 'O' } />
        </ol>
      </section>
    )
}