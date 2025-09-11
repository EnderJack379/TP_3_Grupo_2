import { mascotas } from "./registro.js"; /** importa el array de mascotas desde registro.js */
export function mostrarEstadisticas() {
  let totalMascotas = mascotas.length; /** asigna el total de mascotas a la longitud del array de mascotas */
  let mascotasVacunadas = 0; /** inicializa el contador de mascotas vacunadas */
  let mascotasNoVacunadas = 0; /** inicializa el contador de mascotas no vacunadas */

  mascotas.forEach(mascota => { /** recorre cada objeto mascota en el array */
    if (mascota.vacunada) { /** verifica si la mascota esta vacunada */
      mascotasVacunadas++; /** incrementa el contador de mascotas vacunadas */
    } else {
      mascotasNoVacunadas++; /** incrementa el contador de mascotas no vacunadas */
    }
  });

  /** muestra las estadisticas en la consola */
  console.log("Total:", totalMascotas);
  console.log("Vacunadas:", mascotasVacunadas);
  console.log("No vacunadas:", mascotasNoVacunadas);
  /** muestra las estadisticas en el html */
  document.getElementById("totalMascotas").innerHTML = "Total de mascotas registradas: "+totalMascotas;
  document.getElementById("mascotasVacunadas").innerHTML ="Número de mascotas vacunadas: "+mascotasVacunadas;
  document.getElementById("mascotasNoVacunadas").innerHTML = "Número de mascotas no vacunadas: "+mascotasNoVacunadas;
}
