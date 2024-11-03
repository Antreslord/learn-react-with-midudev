import { useContext } from "react"
import { FiltersContext } from "../context/filters"

// custom hook
export function useFilters () {

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
  