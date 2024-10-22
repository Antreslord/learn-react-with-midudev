import './App.css'
import { useState, useEffect } from 'react'

function App() {

  const [ fact, setFact ] = useState('lorem ipsun cat fact whatever')

  const FACTS_FIRTS_WORD_RANDOM = 'https://catfact.ninja/fact'
  //const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`


  //Hacer el fetching de datos con useEffect
  useEffect(()=> {
    fetch(FACTS_FIRTS_WORD_RANDOM)
    .then(res => res.json())
    .then(data => setFact(data.fact))
  }, [])


  return (
    <main>
      <h1>Prueba tecnica para Juniors</h1>
      <p>{fact}</p>
    </main>
  )
}

export default App
