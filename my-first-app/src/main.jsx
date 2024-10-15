import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'
import './index.css'

// PascalCase
// camellCase


// Crear un componente
/*const CreateButton = (text) => {
    return (
        <button>
            {text}
            <i class="fa-solid fa-magnifying-glass"></i>
        </button>
    )
}*/

createRoot(document.getElementById('root')).render(
    <App />
)
