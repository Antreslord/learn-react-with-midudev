import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Estilos para componentes de React-Bootstrap
import { useStore } from './hooks/useStore';
import { Container, Row, Col, Button, Stack } from 'react-bootstrap';
import { AUTO_LANGUAJE } from './constants';
import { ArrowsIcon } from './components/Icons';
import { LanguajesSelector } from './components/LanguajesSelector';
import { SelectionTypes } from './types.d';
import { TextArea } from './components/TextArea';


function App() {

  const { 
    state, 
    interchangeLanguajes, 
    setFromLanguajes, 
    setToLanguajes, 
    setFromText, 
    setResult
  } = useStore()

  return (
    <Container>
      <h1>Google Traslator created by <strong>Cristian Delgado</strong></h1>
      
      <Row>
        <Col>
          <Stack gap={2}>
            <LanguajesSelector 
              onChange={setFromLanguajes}
              type={SelectionTypes.From}
              value={state.fromLanguaje} 
            />
            <TextArea
              type={SelectionTypes.From}
              value={state.fromText}
              onChange={setFromText}
            />
          </Stack>
        </Col>

        <Col xs='auto'>
          <Button variant='link' disabled={state.fromLanguaje === AUTO_LANGUAJE} onClick={interchangeLanguajes}>
            <ArrowsIcon />
          </Button>
          {/* <button onClick={()=> {setFromLanguajes('es')}}>Cambiar a Español</button> */}
        </Col>

        <Col>
          <Stack gap={2}>
            <LanguajesSelector 
              onChange={setToLanguajes}
              type={SelectionTypes.To}
              value={state.toLanguaje} 
            />
            <TextArea
              type={SelectionTypes.To}
              value={state.result}
              onChange={setResult}
              loading={state.loading}
            />
          </Stack>
        </Col>
      </Row>
      
      

      
    </Container>
  )
}

export default App
