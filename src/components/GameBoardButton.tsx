import styles from "./GameBoardButton.module.css"

type GameBoardButtonProps = {
  gameStatus: 'active' | 'over';
  index: number;
  value: string | null;  
  highlight: boolean;
  onClick: (index: number) => void;
}

export default function GameBoardButton({ gameStatus, index, value, highlight, onClick }: GameBoardButtonProps) {
    let buttonExtraClassName = styles.gameBoardButtonUnpressed;
    if (value) buttonExtraClassName = styles.gameBoardButtonPressed;    
    if (gameStatus === 'over') buttonExtraClassName = styles.gameBoardButtonGameOver;
    if (highlight) buttonExtraClassName = styles.gameBoardButtonGameOverHighlight;

    return (      
      <button 
        className={`${styles.gameBoardButton} ${buttonExtraClassName}`} 
        onClick={() => onClick(index)}>
        {value}
      </button>      
    )
}

