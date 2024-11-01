import { useState, useId } from 'react'
import './Filters.css'

export function Filters ({onChange}) {

    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (e) => {
        setMinPrice(e.target.value)

        onChange(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    const handleChangeCategory = (e) => {
        onChange(prevState => ({
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
                onChange={handleChangeMinPrice} 
                />
                <span><strong>{minPrice}</strong></span>
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