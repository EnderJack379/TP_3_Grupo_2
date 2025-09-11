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