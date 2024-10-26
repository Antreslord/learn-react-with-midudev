import './App.css'
import { useState, useEffect } from 'react'
import { getRandomFact } from './services/fact'


// crear un CUSTOM HOOK
// recuperar la imagen del gato
function useCatImage ({fact}) {
  const [ imageURL, setImageURL ] = useState()

  //este useEffect recupera la imagen del facto
  useEffect(()=>{
    if(!fact) return

    // dividir el facto por palabras y obtener la primera palabra 
    const firstWord = fact.split(' ')[0]
    
    // obtener la imagen con la primera palabra
    fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`)
    .then(response => {
      const { url } = response
      setImageURL(url)
    })
  },[fact])

  return { imageURL }
}

function App() {

  const [ fact, setFact ] = useState()
  const { imageURL } = useCatImage( {fact} )
  // const [ imageURL, setImageURL ] = useState()  <-- Movido al CUSTOM HOOK


  // este useEffect recupera la primer palabra del facto
  useEffect(() => {
    // getRandomFact().then(setFact)
    getRandomFact().then((newFact) => setFact(newFact))
  }, [])

  //este useEffect recupera la imagen del facto
  // {  movido al CUSTOM HOOK  }
  /* useEffect(()=>{  
    if(!fact) return

    // dividir el facto por palabras y obtener la primera palabra 
    const firstWord = fact.split(' ')[0]
    
    // obtener la imagen con la primera palabra
    fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`)
    .then(response => {
      const { url } = response
      setImageURL(url)
    })
  },[fact])*/

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }


  return (
    <main>
      <h1>Prueba tecnica para Juniors</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact  && <p>{fact}</p>}
      {imageURL && <img src={imageURL} alt='img-extraction-of-first-word' ></img>}
    </main>
  )
}

export default App
