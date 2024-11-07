import './App.css'

function HomePage () {
  return (
    <>
      <h2>Home</h2>
      <p>Esta es una página de ejemplo para crear React Router desde cero</p>
      <a href="/about">Ir sobre nosotros</a>
    </>
  )
}

function AboutPage () {
  return (
    <>
      <h2>About us</h2>
      <p>¡Hola! Me llamo Cristian y estoy creando un clon de React Router</p>
      <a href="/home">Ir a Home</a>
      <a href="/about">Ir sobre nosotros</a>
    </>
  )
}

function App() {

  return (
    <main>
      <h1>React Router</h1>
      <AboutPage />
      <HomePage />
    </main>
  )
}

export default App
