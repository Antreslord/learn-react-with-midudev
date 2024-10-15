import { WINNER_COMBOS } from "../constants"

// Verificar el Ganador
export const checkWinnerFrom = (boardToCheck) => {

    //revisar las combinaciones ganadoras para ver si X o O gano
    for(const combo of WINNER_COMBOS){

        const [a, b, c] = combo

        if(
        boardToCheck[a] &&  // Verificar si extiste algo 
        boardToCheck[a] === boardToCheck[b] &&  // Verifica si la poscion a = b
        boardToCheck[a] === boardToCheck[c]     // Verifica si la poscion a = b -> Entonces a, b y c son iguales
        ){
        return boardToCheck[a]  //Devuelve 'X' o 'O'
        }
    }

    return null // Si no hay ganador
}

// Cuando hay un empate
export const checkEndGame = (newBoard) => {
    // Revisar si hay un empate
    // Si no hay mas espacios vacios en el tablero
    return newBoard.every((square) => square != null)
}