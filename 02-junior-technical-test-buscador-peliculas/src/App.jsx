import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import './App.css'
import { useEffect, useRef, useState } from 'react'


function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  // usando useRef validar si es la primera vez que se renderiza un componente
  const isFirstInput = useRef(true)
  
  useEffect(()=>{
    if(isFirstInput.current){ // si es el primer input del usuario
      isFirstInput.current = search === ''  // <== isFirstInput = false
      return 
    }
    
    if(search === ''){
      setError('No se puede buscar una película vacía')
      return
    }

    if(search.match(/^\d+$/)){
      setError('No se puede buscar una pelicula con un numero')
      return
    }

    if(search.length < 4 ){
      setError('La busqueda debe tener al menos 4 letras')
      return
    }

    setError(null)
  },[search])

  return { search, setSearch, error }
}


function App() {

  // custom hook <== hooks/useSearch
  const { search, setSearch, error } = useSearch()
  
  // custom hook <== hooks/useMovies
  const { movies, getMovies } = useMovies({ search })
  
  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies()
    setSearch('')
  }

  const handleChange = (e) => {
    //const newQuery = e.target.value
    //if(newQuery.startsWith(' ')) return //Evalua si empieza con un espacio corta el flujo
    setSearch(e.target.value)
  }

  

  return (
    <div className='page'>
      
      <header className='header'>
        <h1>Movie finder created by <strong>Cristian Delgado</strong></h1>
        <form action="" onSubmit={handleSubmit}>
          <div className='form'>
            <input
              onChange={handleChange}
              value={search}
              name='search'
              type="text"
              placeholder="Avenger, Star Wars, The Matrix, ..."
            />
            <button type="submit">Search</button>
          </div>
        </form>

        {error && <p style={{color: 'red'}}>{error}</p>}

      </header>
      
      <main className='main' >
        <Movies movies={movies}  />
      </main>
    
    </div>
  );
}

export default App
