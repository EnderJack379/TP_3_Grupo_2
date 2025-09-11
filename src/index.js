
import { registrarMascota, mascotas, eliminarMascota } from './registro.js'; /** imports de funciones de registro */ 
import { actualizarTabla } from './tabla.js'; /** imports de funciones de actualizar tabla*/
import { mostrarEstadisticas} from './calculos.js';  /** imports de funciones de estadisticas */ 

console.log("Registro de mascotas iniciado."); /** Inicio del programa*/

function manejarSubmit(event) { /** Manejador de eventos */
  event.preventDefault(); /** previene errores inesperado al dar f5 */
  /** Acceder a valores ingresados en el html */
  const nombre = document.getElementById("nombre").value; 
  const tipo = document.getElementById("tipo").value;
  const edad = parseInt(document.getElementById("edad").value);
  const dueno = document.getElementById("dueno").value;
  const vacunada = document.getElementById("vacunadaSi").checked;

  registrarMascota(nombre, tipo, edad, dueno, vacunada); /** registrar mascota pasando parametros ingresados */
  actualizarTabla(mascotas); /** funciona para actualizar la tabla con las mascotas registradas */
  event.target.reset(); /** Limpia el formulario despues de enviar */
  console.log("Mascota registrada correctamente."); /** confirma que la mascota se registro correctamente */
  mostrarEstadisticas(); /** muestra las estadisticas (cantidad de animales,los vacunados, no vacunados) en la consola */
}

document.getElementById("formMascota").addEventListener("submit", manejarSubmit); /** escucha el evento submit del formulario y llama a la funcion manejarSubmit */

/**
 * Maneja los clics en la tabla de mascotas, específicamente para los botones de eliminar.
 * Utiliza la delegación de eventos para ser más eficiente.
 */
document.getElementById("tablaMascotas").addEventListener("click", function(event) {
  // Verifica si el elemento clickeado tiene la clase 'btn-eliminar'
  if (event.target.classList.contains("btn-eliminar")) {
    // Obtiene el índice del atributo 'data-indice' y lo convierte a número
    const indice = parseInt(event.target.dataset.indice, 10);

    // Pide confirmación al usuario antes de proceder
    if (confirm("¿Estás seguro de que quieres eliminar esta mascota del registro?")) {
      eliminarMascota(indice);    // Elimina la mascota del array
      actualizarTabla(mascotas);  // Actualiza la vista de la tabla
      mostrarEstadisticas();      // Actualiza las estadísticas
    }
  }
});
