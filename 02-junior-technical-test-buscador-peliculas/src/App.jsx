import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import './App.css'
import { useEffect, useRef, useState, useCallback } from 'react'
import debounce from 'just-debounce-it'
//import { useDebouncedCallback } from 'use-debounce'



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

  // ordenar las peliculas por año de lanzamiento
  const [sort, setSort] = useState(false)

  // custom hook <== hooks/useSearch
  const { search, setSearch, error } = useSearch()
  
  // custom hook <== hooks/useMovies
  const { movies, getMovies, loading } = useMovies({ search, sort })
  
  // implementando el debounce
  const debounceGetMovies = useCallback(
    debounce(search => {
      console.log('search', search)
      getMovies({ search })
      setSearch('')
    }, 3000)
    , []  // <== aqui vendrian las dependencias
  ) 

  // const debounceGetMovies = useDebouncedCallback(search => {
  //   console.log('search', search)
  //   getMovies({ search })
  //   setSearch('')
  // },3000)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies({search})
    setSearch('')
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (e) => {
    const newSearch = e.target.value
    setSearch(newSearch)
    debounceGetMovies(newSearch)
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
            <input type="checkbox" onChange={handleSort} checked={sort} />
            <button type="submit">Search</button>
          </div>
        </form>

        {error && <p style={{color: 'red'}}>{error}</p>}

      </header>
      
      <main className='main' >
        {
          loading ? <p>Cargando....</p> : <Movies movies={movies}  />
        }
      </main>
    
    </div>
  );
}

export default App
