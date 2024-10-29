export const searchMovies = async ({ search }) => {
  if (search === "") return null;

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=4287ad07&s=${search}`);
    const json = await response.json();

    // mapear los datos
    // buscar en la propiedad search donde se alojan las peliculas
    const movies = json.Search;

    // no depender del contrato de la api -> Mapealo
    return  movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }));
  } catch (e) {
    throw new Error('Error searching movies')
  }
};
