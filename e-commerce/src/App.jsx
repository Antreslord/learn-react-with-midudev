import { useState } from 'react'
import './App.css'
import { Products } from './components/Products'
import { products as initialProducts } from './mocks/products.json'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { IS_DEVELOPMENT } from './config'
import { useFilters } from './hooks/useFilters'
import { Cart } from './components/Cart'
import { CartProvider } from './context/Cart'


function App() {

  const [products] = useState(initialProducts)
  const {filterProducts, filters} = useFilters()

  // mostrar los productos filtrados
  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header  />
      <Cart />
      <Products products={filteredProducts}/>
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}

export default App
