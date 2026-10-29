// Importa los componentes de React Router:
// Routes agrupa las rutas disponibles.
// Route define qué componente se muestra en cada ruta.
// Link permite navegar entre rutas sin recargar la página.
import { Routes, Route, Link, Navigate } from 'react-router-dom';
// Navigate permite redirigir al usuario automáticamente
// de una ruta a otra sin necesidad de hacer clic en un enlace.
// En esta aplicación se utiliza para redirigir a la ruta "/"
// cuando el usuario intenta acceder a una ruta que no existe.

// Importa el componente que muestra la lista de estudiantes.
import Lista from './Lista';

// Importa el componente que contiene el formulario para agregar estudiantes.
import Agregar from './Agregar';

// Importa los estilos CSS de la aplicación.
import './App.css';

// Componente raíz de la aplicación.
// Contiene la barra de navegación y el área donde se muestran las vistas.
function App() {
  // return devuelve la estructura visual de la aplicación.
  return (
    // Contenedor principal de toda la aplicación.
    <div>

      {/* BARRA DE NAVEGACIÓN:
          Contiene el nombre de la aplicación y los enlaces principales. */}
      <nav className="navbar">

        {/* Nombre o marca de la aplicación. */}
        <span className="marca">Mini-LMS</span>

        {/* Contenedor de los enlaces de navegación. */}
        <div>

          {/* Link permite navegar a la ruta "/".
              En esta ruta se mostrará la lista de estudiantes.
              className="nav-btn" aplica los estilos CSS del enlace. */}
          <Link className="nav-btn" to="/">
            Lista
          </Link>

          {/* Link permite navegar a la ruta "/agregar".
              En esta ruta se mostrará el formulario para agregar
              un nuevo estudiante. */}
          <Link className="nav-btn" to="/agregar">
            Agregar
          </Link>

        </div>
      </nav>

      {/* CONTENEDOR DEL CONTENIDO:
          Agrupa las vistas que se mostrarán debajo de la navegación.
          La clase "contenedor" permite aplicar estilos CSS. */}
      <div className="contenedor">

        {/* Routes identifica cuál de las rutas coincide con la URL
            actual y muestra el componente correspondiente. */}
        <Routes>

          {/* Si la URL es "/", muestra el componente Lista.
              element indica qué componente se debe renderizar. */}
          <Route path="/" element={<Lista />} />

          {/* Si la URL es "/agregar", muestra el componente Agregar. */}
          <Route path="/agregar" element={<Agregar />} />

          {/* Cualquier ruta no definida redirige a "/" */}
          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>

      </div>
    </div>
  );
}

// Exporta App para que pueda utilizarse en main.tsx
// como componente principal de React.
export default App;