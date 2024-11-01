import './Products.css'
import { AddToCartIcon } from './Icons'

export function Products( {products} ) {
    return (
        <main className='products'>
            <ul>
                {
                    products.map(product => (
                        <li key={product.id}>
                            <img src={product.thumbnail} alt="product.title" />
                            <div>
                                <p>
                                    <strong>{product.title}</strong> - ${product.price}
                                </p>
                            </div>
                            <div>
                                <button>
                                    <AddToCartIcon />
                                </button>
                            </div>
                        </li>
                    ))
                }
            </ul>

        </main>
    )
}