// tenemos en arreglo vacio 
export const mascotas=[];


// los datos de entrada 
export function registrarMascota(nombre, tipo, edad, duenio, vacunada) {
// crar los objetos 
  let mascota = {
    nombre: nombre,
    tipo: tipo,
    edad: edad,
    duenio: duenio,
    vacunada: vacunada
  };

// guardamos los odjetos de la arreglo "final de arreglo"
  mascotas.push(mascota);
  console.log("mascotas registradas:", mascotas);
}