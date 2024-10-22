import './App.css'
import { useState, useEffect } from 'react'

function App() {

  const [ fact, setFact ] = useState()
  const [ imageURL, setImageURL ] = useState()

  // url del facto random
  const FACTS_FIRTS_WORD_RANDOM = 'https://catfact.ninja/fact'
  
  // funcion que retorna la imagen con la primera palabra
  function urlFromCaats(firstWord){
    const url = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`
    return url
  }


  // este useEffect recupera la primer palabra del facto
  useEffect(()=> {

    //obtener la primera palabra del facto
    fetch(FACTS_FIRTS_WORD_RANDOM)
    .then(res => res.json())
    .then(data => {
      const { fact } = data
      
      setFact(fact)
    })
  }, [])

  //este useEffect recupera la imagen del facto
  useEffect(()=>{
    if(!fact) return

    // dividir el facto por palabras y obtener la primera palabra 
    const firstWord = fact.split(' ')[0]
    
    // obtener la imagen con la primera palabra
    fetch(urlFromCaats(firstWord))
    .then(response => {
      const { url } = response
      setImageURL(url)
    })
  },[fact])


  return (
    <main>
      <h1>Prueba tecnica para Juniors</h1>
      {fact  && <p>{fact}</p>}
      {imageURL && <img src={imageURL} alt='img-extraction-of-first-word' ></img>}
    </main>
  )
}

export default App
