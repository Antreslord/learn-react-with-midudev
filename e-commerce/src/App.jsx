import { useContext, useState } from 'react'
import './App.css'
import { Products } from './components/Products'
import { products as initialProducts } from './mocks/products.json'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { IS_DEVELOPMENT } from './config'
import { FiltersContext } from './context/filters'


// custom hook
function useFilters () {

  // implementando filtros por precio y categoría
/*  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0
  }) */

  const {filters, setFilters} = useContext(FiltersContext)

  // sistema de filtro
  const filterProducts = (products) => {
    
    // Retornara aquellos productos que cumplan con las siguientes condiciones
    return  products.filter(product => { 
      
      return (
        product.price >= filters.minPrice  &&  
        (
          filters.category === 'all' || 
          product.category === filters.category
        )
      )
    })
  }

  return {filterProducts, filters, setFilters}
}

function App() {

  const [products] = useState(initialProducts)
  const {filterProducts, filters, setFilters} = useFilters()

  // mostrar los productos filtrados
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts}/>
      {IS_DEVELOPMENT && <Footer filters={filters} />}
    </>
  )
}

export default App
