import styles from "./Player.module.css"

type PlayerProps = {
  name: string;
  symbol: string;
  active: boolean;
}

export default function Player({ name, symbol, active }: PlayerProps) {
    return (
      <li className={`${styles.player} ${active ? styles.activePlayer : undefined}`}>
        <span>{ name }</span>
        <span className={styles.playerSymbol}>{ symbol }</span>
      </li>
    )
}