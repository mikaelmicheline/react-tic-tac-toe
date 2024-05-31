import styles from "./GameBoardButton.module.css"

type GameBoardButtonProps = {
  index: number;
  value: string | null;
  handleClickButton: (index: number) => void;
}

export default function GameBoardButton({index, value, handleClickButton}: GameBoardButtonProps) {
    return (      
      <button 
        className={value ? styles.gameBoardButtonPressed : styles.gameBoardButtonUnpressed} 
        onClick={() => handleClickButton(index)}>
        {value}
      </button>      
    )
}

