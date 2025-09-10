// tenemos en arreglo vacio 
let mascotas = [];

// los datos de entrada 
function registrarMascota(nombre, tipo, edad, duenio, vacunada) {
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

  // para verificar usamos consola para que se muestre en el navegador
  console.log("Mascota registrada:", mascota);
  console.log("Lista completa:", mascotas);
}


/*
// a aqui son 2 eje. es como el registo de mascotas 
registrarMascota("Luna", "Gato", 3, "Juan Perez", true);
registrarMascota("Firulais", "Perro", 5, "Ana Gómez", false);
*/