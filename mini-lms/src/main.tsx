// Importa StrictMode, una herramienta de React que ayuda
// a detectar posibles problemas durante el desarrollo.
import { StrictMode } from 'react';

// Importa createRoot, que permite montar la aplicación React
// dentro de un elemento HTML.
import { createRoot } from 'react-dom/client';

// Importa BrowserRouter para habilitar la navegación
// mediante las rutas de React Router.
import { BrowserRouter } from 'react-router-dom';

// Importa el componente principal de la aplicación.
import App from './App.tsx';

// Importa los estilos CSS globales de la aplicación.
import './index.css';

// Busca el elemento HTML que tiene el id="root".
// createRoot prepara ese elemento para mostrar la aplicación.
// El signo ! indica a TypeScript que asumimos que el elemento existe.
createRoot(document.getElementById('root')!).render(

  // StrictMode ayuda a detectar errores y malas prácticas
  // durante el desarrollo. No agrega una interfaz visual.
  <StrictMode>

    {/* BrowserRouter permite que los componentes de la aplicación
        utilicen rutas como "/" y "/agregar".
        Debe envolver los componentes que necesitan navegar. 
        A su vez permite navegar sin recargar la pagina entera.*/}
    <BrowserRouter>

      {/* App es el componente principal.
          Contiene la barra de navegación y las rutas
          definidas en App.tsx. */}
      <App />

    </BrowserRouter>
  </StrictMode>,
);