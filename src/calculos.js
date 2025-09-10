import { mascotas } from "./registro.js";
export function mostrarEstadisticas() {
  let totalMascotas = mascotas.length;
  let mascotasVacunadas = 0;
  let mascotasNoVacunadas = 0;

  mascotas.forEach(mascota => {
    if (mascota.vacunada === true) {
      mascotasVacunadas++;
    } else {
      mascotasNoVacunadas++;
    }
  });

  console.log("Total:", totalMascotas);
  console.log("Vacunadas:", mascotasVacunadas);
  console.log("No vacunadas:", mascotasNoVacunadas);
}


