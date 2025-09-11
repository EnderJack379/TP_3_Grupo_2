/** recibir el array de mascostas y actualiza la tabla*/
export function actualizarTabla(mascotas) {

    const tbody = document.querySelector("#tablaMascotas tbody"); /** obtiene el elemento <tbody> de la "tablaMascotas" */
    tbody.innerHTML = ""; /** Limpia el contenido existente en el <tbody> para evitar duplicados */

    mascotas.forEach((mascota, indice) => { /** recorre cada objeto mascota y obtiene su índice*/
        const fila = document.createElement("tr"); /** crea una fila <tr> para cada mascota */

        // Usar una plantilla de texto para crear las celdas de forma más legible y segura
        // Se añade una celda (td) con un botón para eliminar, que guarda el índice de la mascota en un atributo data-indice.
        fila.innerHTML = `
            <td>${mascota.nombre}</td>
            <td>${mascota.tipo}</td>
            <td>${mascota.edad}</td>
            <td>${mascota.duenio}</td>
            <td>${mascota.vacunada ? 'Sí' : 'No'}</td>
            <td><button class="btn-eliminar" data-indice="${indice}">Eliminar</button></td>
        `;
        tbody.appendChild(fila); /** agrega la fila al cuerpo de la tabla <tbody> */
    });
}