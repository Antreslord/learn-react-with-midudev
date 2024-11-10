import { EVENTS } from "./const";

export function navigate(href) {
  window.history.pushState({}, "", href);

  // crear un componente personalizado
  const navigationEvent = new Event(EVENTS.PUSHSTATE);
  window.dispatchEvent(navigationEvent);
}

// El parametro props -> Son por ejemplo el (className ...)
export function Link ({ target, to, ...props }) {
    const handleClick = (event) => {
      
      const isMainEvent = event.button === 0 // Click izq | Click principal
      // boton Click Izq  +  ( Tecla Windows -  Tecla Alt    -  Tecla Ctrl    -  Tecla Mayus )
      const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
      const isManageableEvent = target === undefined || target === '_self'
      
      if(isMainEvent && isManageableEvent && !isModifiedEvent){
          event.preventDefault()
          navigate(to)  // Navegación con SPA
        }

    }
    
    return <a onClick={handleClick} href={to} target={target} {...props}></a>
}