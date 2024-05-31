import Player from "./Player"
import styles from "./Players.module.css"

export default function Players() {
    return (
      <section>
        <ol className={styles.players}>
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>
      </section>
    )
}