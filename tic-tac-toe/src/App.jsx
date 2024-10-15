import './App.css'
import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import { TURNS, WINNER_COMBOS } from './constants'
import { checkWinnerFrom, checkEndGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import { Board } from './components/Board'


function App() {
  
  // Crear el tablero
  const [ board, setBoard ] = useState( ()=> {
    const boardFromStorage = window.localStorage.getItem('board')

    // Si existe un item 'board' en localStorage devuelve el valor de ese item
    // si no entonces devuelve por defecto un Array con 9 posiciones null
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })

  // Organizar Los Turnos de los Jugadores
  const [ turn, setTurn ] = useState( () => {
    const turnFromStorage = window.localStorage.getItem('turn')

    // Si el item 'turn' en localStorage devuelve null o undefined
    // si no entonces devuelve por defecto 'X'
    return turnFromStorage ?? TURNS.X 
  })

  // Estado del ganador
  const [ winner, setWinner ] = useState(null)

  //Resetear el juego
  const resetGame = () => {
    //Para resetear el juego o culaquier cosa hay que devolver los valores iniciales
    setBoard(Array(9).fill(null))   // <-- Los campos vuelven a estar vacios
    setTurn(TURNS.X)                // <-- La X comienza el Juego
    setWinner(null)                 // <-- No hay ganador
  }

  // Actualizar el Tablero cada vez que se un jugador da click en un Square
  const updateBoard = (index) =>{

    // Si la posicion ya tiene Algo NO SOBRESCRIBIR
    if(board[index] || winner) return

    // Actualizar el Tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //Guardar la partida en el localStorage
    window.localStorage.setItem('board', JSON.stringify(newBoard))  //<-- Guarda el tablero con sus posiciones
    window.localStorage.setItem('turn', newTurn) //<-- Guarda el tablero con el ultimo turno

    // Revisar si hay un ganador
    const newWinner = checkWinnerFrom(newBoard)
    if(newWinner){
      confetti()
      setWinner(newWinner)
      window.localStorage.removeItem('turn')
      window.localStorage.removeItem('board')
    } else if (checkEndGame(newBoard)) {
      setWinner(false)  // <-- empate
    }
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>

      <button onClick={resetGame}>Resetear el Juego</button>

      <section className='game'>
        <Board updateBoard={updateBoard} board={board} />
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X} >
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O} >
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />

    </main>
  )
}

export default App
