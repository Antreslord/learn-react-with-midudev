import { createContext, useState } from "react";

// 1.   Crear el Contexto
//      Este el que tenemos que consumir         
export const FiltersContext = createContext()

// 2.   Crea el Provider, para proveer el contexto
//      Este es el que nos provee de acceso al contexto
export function FiltersProvider ({ children }){

    // usar un estado para el contexto
    const [filters, setFilters]=useState({
        category: 'all',
        minPrice: 600
    })

    return (
        <FiltersContext.Provider value={{ filters, setFilters }}>
            {children}
        </FiltersContext.Provider>
    )
}
