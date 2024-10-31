import { useState, useRef, useMemo } from 'react';
import { searchMovies } from '../services/movies';

// customHook para realizar todo lo referente al fetching de datos
// el parametro search busca si el JSON tiene la propiedad 'search'
export function useMovies ({ search, sort }) {

  const [movies, setMovies] = useState([])

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // useRef para evitar que se realize una misma busqueda dos veces
  const previousSearch = useRef(search)


  const getMovies = async ({search}) => {
    // con el useRef evita que se realice la misma busqueda 
    if(search === previousSearch.current) return

    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newMovies = await searchMovies( {search} )
      setMovies(newMovies)
      
    } catch (e) {
      setError(e.message)
    
    } finally {
      setLoading(false)
    }
  }

  // useMemo para memorizar el ordenamiento de peliculas y asi no consumir recursos
  const sortedMovies = useMemo(()=> {

    // el ordenamiento es que quiero que se memorize para que cada vez que al 
    // buscar una pelicula, seleccionar el checkbox de ordenamiento se ejecute
    // el calculo 

    return sort 
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) 
      : movies
  },[ sort, movies ])

  return {movies: sortedMovies, getMovies, loading}
}