import './App.css'
import Otro from './components/otro'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'


function App() {

  const { fact, refreshRandomFact } = useCatFact()
  const { imageURL } = useCatImage( {fact} )

  const imgStyle = {
    heigth: "200px",
    width: "200px"

  }

  const handleClick = async () => {
    refreshRandomFact()
  }


  return (
    <main>
      <h1>Prueba tecnica para Juniors</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact  && <p>{fact}</p>}
      {imageURL && <img src={imageURL} style={imgStyle} alt='img-extraction-of-first-word' ></img>}
    
      <Otro imgStyle={imgStyle} />
    </main>
  )
}

export default App
