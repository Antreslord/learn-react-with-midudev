import './App.css'
import { useState, useEffect } from 'react'

function App() {

  const [ fact, setFact ] = useState('lorem ipsun cat fact whatever')

  //Hacer el fetching de datos con useEffect

  useEffect(()=> {
    fetch('https://catfact.ninja/fact')
    .then(res => res.json)
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
