# Enuciado

1. E-commerce

* Muestra una lista de productos que viene de un JSON
* Añade un filtro por categoría
* Añade un filtro por precio
* Haz uso de useContext para evitar prompts innecesarias

2. Shopping Cart

- Haz que se puedan añadir los productos a un carrito
- Haz que se puedan eliminar los productos del carrito
- Haz que se puedan modificar la cantidad de productos del carrito
- Sincroniza los cambios del carrito con la lista de productos
- Guarda en un localStorage el carrito para qu se recupere la página


## Prompt Drilling

Es el envio de una funcion o dato o estructura del hijo de un hijo del componente padre o componente origen.

## useID --> (Para identificadores)

Genera un identificador UNICO que siempre sera el mismo.

## useContext

## JavaScript Methods
1. **findIndex(element)** = Devuelve el primer elemento que cumpla la condición.
    - **Ej**:   `const array1 = [5, 12, 8, 130, 44];`
                `const isLargeNumber = (element) => element > 13;`
                `console.log(array1.findIndex(isLargeNumber));`
                `// Expected output: 3`

    - **Execute:** `const productInCartIndex = cart.findIndex(item => item.id === product.id)`

2. **filter()** = Crea un nuevo array con todos los elementos que cumpla la condición implementada por la función dada.

    - **Ej**:   `const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];`
                `const result = words.filter((word) => word.length > 6);`
                `console.log(result);`
                `// Expected output: Array ["exuberant", "destruction", "present"]`
    
    -**Execute**: `setCart(prevState => prevState.filter(item => item.id != product.id))`

3. some() = Comprueba si almenos uno de los elementos del array cumple con la condición implementada por la función proporcionada.
    - **Ej**:   `const array = [1, 2, 3, 4, 5];`
                `// Checks whether an element is even`
                `const even = (element) => element % 2 === 0;`
                `console.log(array.some(even));`
                `// Expected output: true`

    - **Execute**:  {const checkProductInCart = product => {
                        return cart.some(item => item.id == product.id)
                    }}
     
