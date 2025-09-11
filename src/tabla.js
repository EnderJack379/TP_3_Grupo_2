/** recibir el array de mascostas y actualiza la tabla*/
export function actualizarTabla(mascotas) {

    const tbody = document.querySelector("#tablaMascotas tbody"); /** obtiene el elemento <tbody> de la "tablaMascotas" */
    tbody.innerHTML = ""; /** Limpia el contenido existente en el <tbody> para evitar duplicados */

    mascotas.forEach(mascota => { /** recorre cada objeto mascota*/
        const fila = document.createElement("tr"); /** crea una fila <tr> para cada mascota */

        // Usar una plantilla de texto para crear las celdas de forma más legible y segura
        fila.innerHTML = `
            <td>${mascota.nombre}</td>
            <td>${mascota.tipo}</td>
            <td>${mascota.edad}</td>
            <td>${mascota.duenio}</td>
            <td>${mascota.vacunada ? 'Sí' : 'No'}</td>
        `;
        tbody.appendChild(fila); /** agrega la fila al cuerpo de la tabla <tbody> */
    });
}