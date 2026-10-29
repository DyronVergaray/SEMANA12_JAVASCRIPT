 // Importa Link para navegar entre páginas sin recargar
 // toda la aplicación usando React Router.
import { Link } from 'react-router-dom';

// Importa la lista de estudiantes y la función que determina
// el estado de cada estudiante desde el archivo store.ts.
import { estudiantes, estado } from './store';

// Componente Lista: muestra una tabla con los estudiantes.
// Utiliza .map() para recorrer la lista y generar las filas.
function Lista() {
  // return define lo que se mostrará en pantalla (JSX).
  return (
    // div: contenedor principal de toda la vista.
    <div>

      {/* Título principal de la página. */}
      <h1>Lista de estudiantes</h1>

      {/* Link permite ir a la ruta /agregar.
          className="boton" aplica los estilos CSS del botón. */}
      <Link className="boton" to="/agregar">
        Agregar estudiante
      </Link>

      {/* table crea la tabla y className aplica sus estilos CSS. */}
      <table className="tabla">

        {/* thead contiene la cabecera de la tabla. */}
        <thead>
          <tr>
            {/* Cada th representa el título de una columna. */}
            <th>Nombre</th>
            <th>Créditos</th>
            <th>Estado</th>
          </tr>
        </thead>

        {/* tbody contiene las filas con los datos. */}
        <tbody>

          {/* .map() recorre el arreglo estudiantes.
              e representa al estudiante actual.
              i representa su índice dentro del arreglo.
              Por cada estudiante, genera una fila <tr>. */}
          {estudiantes.map((e, i) => (
            // key ayuda a React a identificar cada fila.
            <tr key={i}>

              {/* Muestra el nombre del estudiante. */}
              <td>{e.nombre}</td>

              {/* Muestra la cantidad de créditos del estudiante. */}
              <td>{e.creditos}</td>

              {/* Columna donde se muestra el estado. */}
              <td>

                {/* span permite aplicar estilos al texto del estado.
                    estado(e.creditos) calcula el estado del estudiante.
                    Si devuelve 'Matriculado', aplica 'badge ok'.
                    En caso contrario, aplica 'badge pend'. */}
                <span
                  className={
                    estado(e.creditos) === 'Matriculado'
                      ? 'badge ok'
                      : 'badge pend'
                  }
                >
                  {/* Muestra el texto del estado calculado. */}
                  {estado(e.creditos)}
                </span>

              </td>
            </tr>
          ))}

          {/* Fin del recorrido de estudiantes.map(). */}
        </tbody>
      </table>

    </div>
  );
}

// Exporta el componente para poder importarlo y utilizarlo
// en otras partes de la aplicación.
export default Lista;