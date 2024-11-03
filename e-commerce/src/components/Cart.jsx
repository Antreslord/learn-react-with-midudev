import { CartIcon, ClearCartIcon } from "./Icons";
import './Cart.css'
import { useId } from "react";

export function Cart () {
    
    const cartCheckboxId = useId()

    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input type="checkbox" id={cartCheckboxId} hidden />

            <aside className="cart">
                <ul>
                    <li>
                        <img 
                        src="https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/thumbnail.png" 
                        alt="pragnance" 
                        />

                        <div>
                            <strong>Perfume</strong> - $200
                        </div>

                        <footer>
                            <small>
                                Qty: 1
                            </small>
                            <button>+</button>
                        </footer>
                    </li>
                </ul>

                <button>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}