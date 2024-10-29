import { useState } from 'react';
import { searchMovies } from '../services/movies';

// customHook para realizar todo lo referente al fetching de datos
// el parametro search busca si el JSON tiene la propiedad 'search'
export function useMovies ({search}) {

  const [movies, setMovies] = useState([])


  const getMovies = async () => {
    const newMovies = await searchMovies( {search} )
    setMovies(newMovies)

  }

  return {movies, getMovies}
}