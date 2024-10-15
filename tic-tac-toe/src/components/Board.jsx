import { Square } from "./Square"

export function Board( { updateBoard, board } ){
    return(
        
        board.map(( _, index ) => {
            return (
            <Square updateBoard={updateBoard} key={index} index={index}>
                {board[index]}
            </Square>
            )
        })
          
    )
}