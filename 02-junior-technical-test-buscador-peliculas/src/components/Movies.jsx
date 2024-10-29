function ListOfMovies({ movies }) {
  return (
    <ul className="movies">
      {
      movies.map((movie) => (
        <li className="movie" key={movie.id}>
          <h3><strong>{movie.title}</strong></h3>
          <p>{movie.year}</p>
          <img src={movie.poster} alt={movie.Title} />
        </li>
      ))
      }
    </ul>
  );
}

function MoviesNoResult(){
    return (
        <p>No se encontraron peliculas para esta esta búsqueda</p>
    )
}



export function Movies( {movies} ){
    // devulve un booleano dependiendo si hay peliculas
    const hasMovies = movies?.length > 0

    return (
        hasMovies
        ? <ListOfMovies movies={movies}></ListOfMovies>
        : <MoviesNoResult />
    )
}