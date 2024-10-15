
//Crear el Square o Campo 
export const Square = ({ children, isSelected, updateBoard, index }) => {

    const styleSquare = `square ${isSelected ? 'is-selected' : ''}`
  
    const handleClick = () => {
      updateBoard(index)
    }
  
    return(
      <div className={styleSquare} onClick={handleClick} >
        {children}
      </div>
    )
  }