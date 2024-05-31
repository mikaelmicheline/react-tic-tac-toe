import styles from "./Player.module.css"

type PlayerProps = {
  name: string;
  symbol: string;
}

export default function Player({ name, symbol }: PlayerProps) {
    return (
      <li>
        <span>{ name }</span>
        <span className={styles.playerSymbol}>{ symbol }</span>
      </li>
    )
}