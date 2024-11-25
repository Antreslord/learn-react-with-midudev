import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Estilos para componentes de React-Bootstrap
import { useStore } from './hooks/useStore';


function App() {

  const { state, setFromLanguajes } = useStore()

  return (
    <div>
      <h1>Google Traslator created by <strong>Cristian Delgado</strong></h1>
      <button onClick={()=> {
        setFromLanguajes('es')
      }}>Cambiar a Español</button>

      {state.fromLanguaje}
    </div>
  )
}

export default App
