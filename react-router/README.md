# Crea un React Router desde Cero

 ✅ Crear una forma de hacer MPA(Multiple Page Application)
 ✅ Crea una forma de hacer SPAs (Single Page Applications) -> (`pushstate`)
 ✅ Poder Navegar entre paginas con el botón de atrás -> (`popstate`)
 ✅ Crear componente Link para hacerlo declarativo
 ✅ Crear componente Router para hacerlo mas declarativo
 ✅ Soportar la ruta de defecto (estado: 404)
 ✅ Soportar rutas con parámetros dinamicos (`/search/:id`)

    * Instalar Dependencia **regexp**: `npm i path-to-regexp -E` 


 ✅ Componente <Router /> para hacerlo declarativo
 ✅ Lazy Loading de las rutas: `import { lazy, Suspense from 'react'} ` Soluciona el problema de rendimiento del llamado a los componentes que no se requieren en su momento.
 - Testing:
    * Instalar vitest: `npm i vitest -D`
    package.json > "script.test" = "vitest
 - (Opcional) Publicar el paquete NPM

 ## Window's Methods
 
 - **window.location.pathname**: 
 - **window.history.pushState**: Refleja el cambio de la URL sin recargar la página.

 ## Eventos para redireccionar
  * pushstate
  * popstate