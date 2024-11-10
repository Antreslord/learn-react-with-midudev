import { match } from "path-to-regexp";
import { EVENTS } from "./const";
import { useState, useEffect, Children } from "react";

export function Router({
  children,
  routes = [],
  defaultComponent: DefaultComponent = () => <h1>404</h1>,
}) {
  const [currentPath, setCurretPath] = useState(window.location.pathname);

  // Este useEffect redirection la url a la pagina actual donde se encuentran
  useEffect(() => {
    const onLocationChange = () => {
      setCurretPath(window.location.pathname);
    };

    // NAVIGATION_EVENT <--- redirecciona una pagina hacia adelante con sus componentes
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange);
    // popstate <-- redirecciona una pagina hacia atrás con sus componentes
    window.addEventListener(EVENTS.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange);
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange);
    };
  }, []);

  let routeParams = {}
  
  // add route from children <Route /> components
  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type
    const isRoute = name == 'Route'

    return isRoute ? props : null
  }).filter(Boolean)
  console.log(routesFromChildren)

  const routesToUse = routes.concat(routesFromChildren).filter(Boolean)


  const Page = routes.find(({ path }) => {
    if (path === currentPath) return true

    // Se usa path-to-regexp
    // para poder detectar rutas dinámicas como por ejemplo
    // /search/:query  <-- Que es una ruta dinámica
    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath)
    if(!matched) return false

    // guarda los parámetros de la url que eran dinámicos
    // y que hemos extraído con path-to-regexp
    routeParams = matched.params // --> { query: 'javascript' } // '/search/javascript'
    return true

  })?.Component;

  return Page 
  ? <Page routeParams={routeParams}/> 
  : <DefaultComponent />;
}
