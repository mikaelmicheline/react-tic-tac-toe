import Players from "./components/Players"
import GameBoard from "./components/GameBoard"

function App() {

  return (
    <>
      <header>
        <h1>Tic-Tac-Toe with React</h1>
      </header>
      <main>
        <Players />
        <GameBoard />
      </main>
    </>
  )
}

export default App
