import { registrarMascota, mascotas } from './registro.js';
import { actualizarTabla } from './tabla.js';
import { mostrarEstadisticas} from './calculos.js';  

console.log("Registro de mascotas iniciado.");

function manejarSubmit(event) {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const tipo = document.getElementById("tipo").value;
  const edad = parseInt(document.getElementById("edad").value);
  const dueno = document.getElementById("dueno").value;
  const vacunada = document.querySelector('input[name="vacunada"]:checked').value === "si";

  registrarMascota(nombre, tipo, edad, dueno, vacunada);
  actualizarTabla(mascotas);
  event.target.reset();
  console.log("Mascota registrada correctamente.");
  mostrarEstadisticas(mascotas);
}

document.getElementById("formMascota").addEventListener("submit", manejarSubmit);

