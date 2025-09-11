 /**arreglo vaci que se exporta  */
export const mascotas=[];


/** datos de entrada en el objeto */ 
export function registrarMascota(nombre, tipo, edad, duenio, vacunada) {
/** crear objeto */
  const mascota = {
    nombre,
    tipo,
    edad,
    duenio,
    vacunada
  };

    /** Almacenamiento en el array mascotas de cada nueva mascota */
  mascotas.push(mascota);
  console.log("mascotas registradas:", mascotas);
}

/**
 * Elimina una mascota del array 'mascotas' utilizando su índice.
 * @param {number} indice - El índice de la mascota que se va a eliminar.
 */
export function eliminarMascota(indice) {
  // Se asegura de que el índice sea válido antes de intentar eliminar
  if (indice >= 0 && indice < mascotas.length) {
    mascotas.splice(indice, 1); // Elimina 1 elemento en la posición 'indice'
    console.log("Mascota eliminada. El registro actualizado es:", mascotas);
  }
}