# Enunciado

Crea una aplicacion para buscar peliculas

## API:

- https://www.omdbapi.com/
- API_KEY: 4287ad07

### Endpoints:

**Send all data requests to:**
`https://www.omdbapi.com/?apikey=4287ad07&s=${keyWord}`

## Requerimientos

* Necesita mostrar un input para buscar la película y un boton para buscar
* Lista de películas encontradas y muestra el Título, Año y Poster
* Haz que las películas se muestren en un grid responsive **(grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));)**

## Primera iteración 

* Evitar que se haga la misma búsqueda dos veces seguidas (**useRef()**)
* Haz que la búsqueda se haga automáticamente al escribir 
- Evita que se haga la búsqueda continuamente al escribir (debounce).

## Debouncing

Podria interpretarse para este caso como la espera de un tiempo en el momento en el que el usuario termine de teclear, con el fin de que el momento en se ejecute el fetching de datos.

### Existen librerias para React y otros frameworks
Al buscar en google puedes encontrar librerias de debounce que agiliza el proceso. Una de ellas es 
- **npm i use-debounce** --> **DebouncedCallBack** --> *https://www.npmjs.com/package/use-debounce#debounced-callbacks*
- **Documentación de just-angus** --> *https://github.com/angus-c/just?tab=readme-ov-file#just-debounce-it*

## useRef

useRef es un hook que permite crear una referencia MUTABLE que persiste durante todo el ciclo de vida del componente. 
Y cada vez que cambia **NO REDERIZA** de nuevo el componente, a diferencia de useState y useEffect.

## useMemo

Memoriza un valor para **NO VOLVER A CALCULAR** y consumir recursos. 
Este hook no siempre es necesario, solo si el calculo se aplica a un gran volumen de datos (ej: 1000 datos) a los que no siempre es necesario aplicar ese calculo