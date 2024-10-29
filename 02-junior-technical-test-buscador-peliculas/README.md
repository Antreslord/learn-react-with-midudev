# Enunciado

Crea una aplicacion para buscar peliculas

## API:

- https://www.omdbapi.com/
- API_KEY: 4287ad07

## Requerimientps

* Necesita mostrar un input para buscar la película y un boton para buscar
* Lista de peliculas encontradas y muestra el Título, Año y Poster
* Haz que las peliculas se muestren en un grid responsive *(grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));)*

## Primera iteración 

- Evitar que se haga la misma búsqueda dos veces seguidas
- Haz que la búsqueda se haga automáticamente al escribir 
- Evita que se haga la búsqueda continuamente al escribir (debounce).

### Endpoints:

**Send all data requests to:**
`https://www.omdbapi.com/?apikey=4287ad07&s=${keyWord}`

## useRef

useRef es un hook que permite crear una referencia MUTABLE que persiste durante todo el ciclo de vida del componente. 
Y cada vez que cambia **NO REDERIZA** de nuevo el componente, a diferencia de useState y useEffect.