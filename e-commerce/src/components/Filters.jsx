import {useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters () {

    const {filters, setFilters} = useFilters()

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (e) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    const handleChangeCategory = (e) => {
        setFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Price</label>
                <input 
                type="range" 
                id={minPriceFilterId} 
                min='0' 
                max='1000' 
                value={filters.minPrice}
                onChange={handleChangeMinPrice} 
                />
                <span><strong>{filters.minPrice}</strong></span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Category</label>
                <select id={categoryFilterId} onChange={handleChangeCategory} >
                    <option value="all" >All</option>
                    <option value="beauty">Beauty</option>
                    <option value="groceries">Groceries</option>
                    <option value="fragrances">Fragrances</option>
                </select>
            </div>
        </section>
    )
}