import './App.css'
import { Router } from './Router'
import { lazy, Suspense } from 'react'
import SearchPage from './pages/Search'
import { Route } from './Route'
const lazyHomePage = lazy(()=> import('./pages/Home'))
const lazyAboutPage = lazy(()=> import('./pages/About'))
const lazy404Page = lazy(()=> import('./pages/404'))

const routes = [
  { path: '/', Component: lazyHomePage },
  { path: '/about', Component: lazyAboutPage },
  { path: '/search/:query', Component: SearchPage }
]

function App() {

  return (
    <main>
      <Suspense fallback={<div>Loading ...</div>}>
        <Router routes={routes} defaultComponent={lazy404Page}>
          <Route path="/" Component={lazyHomePage}></Route>
          <Route path="/about" Component={lazyAboutPage}></Route>
        </Router>
      </Suspense>
    </main>
  )
}

export default App
