import { useState } from 'react'
import './App.css'

function App() {


  return (
    <div className='page'>
      <header>
        <h1>Movie finder created by <strong>Cristian Delgado</strong></h1>
        <form action="">
          <div className='form'>
            <input
              type="text"
              placeholder="Avenger, Star Wars, The Matrix, ..."
            />
            <button type="submit">Search</button>
          </div>
        </form>
      </header>
      <main>
      </main>
    </div>
  );
}

export default App
