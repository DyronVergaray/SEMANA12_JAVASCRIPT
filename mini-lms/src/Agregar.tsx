// Importa el tipo FormEvent de React para definir
// el tipo del evento que se produce al enviar el formulario.
import type { FormEvent } from 'react';

// Importa Link para navegar entre páginas sin recargar
// toda la aplicación.
import { Link } from 'react-router-dom';

// Importa el arreglo de estudiantes desde store.ts.
// Aquí se agregarán los nuevos estudiantes.
import { estudiantes } from './store';

// Componente Agregar: muestra un formulario para registrar
// estudiantes nuevos.
function Agregar() {

  // Función que se ejecuta cuando el usuario envía el formulario.
  // FormEvent<HTMLFormElement> indica que el evento pertenece
  // a un formulario HTML.
  function guardar(evento: FormEvent<HTMLFormElement>) {

    // Evita que el navegador recargue la página al enviar
    // el formulario.
    evento.preventDefault();

    // Obtiene el formulario que generó el evento.
    const form = evento.currentTarget;

    // Busca el campo llamado "nombre".
    // HTMLInputElement indica que el elemento es un input.
    // .value obtiene el texto ingresado.
    // .trim() elimina espacios al inicio y al final.
    const nombre = (
      form.elements.namedItem('nombre') as HTMLInputElement
    ).value.trim();

    // Busca el campo llamado "creditos".
    // .value obtiene el valor ingresado como texto.
    // Number() convierte ese texto en un número.
    const creditos = Number(
      (form.elements.namedItem('creditos') as HTMLInputElement).value
    );

    // VALIDACIÓN 1:
    // Comprueba si el nombre está vacío.
    if (nombre === '') {

      // Muestra un mensaje de advertencia al usuario.
      alert('El nombre no puede estar vacío');

      // Detiene la función para evitar guardar datos incorrectos.
      return;
    }

    // VALIDACIÓN 2:
    // Comprueba si los créditos no son un número válido,
    // son menores que 1 o son mayores que 24.
    if (
      Number.isNaN(creditos) ||
      creditos < 1 ||
      creditos > 24
    ) {

      // Muestra un mensaje indicando el rango permitido.
      alert('Los créditos deben estar entre 1 y 24');

      // Detiene la función si la validación falla.
      return;
    }

    // Si las validaciones pasan, agrega un nuevo objeto
    // al arreglo de estudiantes.
    // El objeto contiene el nombre y los créditos ingresados.
    estudiantes.push({ nombre, creditos });

    // Informa que el estudiante fue agregado correctamente.
    alert('Estudiante agregado. Ve a la lista para verlo.');

    // Limpia los campos del formulario después de guardar.
    form.reset();
  }

  // Devuelve la interfaz visual del componente.
  return (
    // Contenedor principal.
    <div>

      {/* Título de la página. */}
      <h1>Agregar estudiante</h1>

      {/* Formulario que ejecuta guardar al enviarse.
          onSubmit se activa al pulsar Guardar o enviar el formulario. */}
      <form onSubmit={guardar}>

        {/* Campo para ingresar el nombre del estudiante. */}
        <div className="campo">

          {/* Etiqueta descriptiva del campo. */}
          <label>Nombre</label>

          {/* Input donde se escribe el nombre.
              name="nombre" permite identificarlo en guardar(). */}
          <input name="nombre" />
        </div>

        {/* Campo para ingresar los créditos. */}
        <div className="campo">

          {/* Etiqueta descriptiva del campo. */}
          <label>Créditos</label>

          {/* type="number" permite introducir valores numéricos.
              name="creditos" permite encontrar este campo
              cuando se envía el formulario. */}
          <input name="creditos" type="number" />
        </div>

        {/* Botón que envía el formulario y ejecuta guardar(). */}
        <button type="submit" className="boton">
          Guardar
        </button>

        {/* Link regresa a la ruta principal (/).
            className="boton gris" aplica los estilos CSS correspondientes.
            No guarda los datos: solo permite cancelar y navegar. */}
        <Link className="boton gris" to="/">
          Cancelar
        </Link>

      </form>
    </div>
  );
}

// Exporta el componente para utilizarlo en las rutas
// o en otros archivos de la aplicación.
export default Agregar;