/** recibir el array de mascostas y actualiza la tabla*/
export function actualizarTabla(mascotas) {

    const tbody = document.querySelector("#tablaMascotas tbody"); /** obtiene el elemento <tbody> de la "tablaMascotas" */
    tbody.innerHTML = ""; /** Limpia el contenido existente en el <tbody> para evitar duplicados */

    mascotas.forEach(mascotas => { /** recorre cada objeto mascotas*/ /** antes tenia una s demas, cambia algo?*/
        const fila = document.createElement("tr"); /** crea una fila <tr> para cada mascota */
        Object.values(mascotas).forEach(valor => { /** recorre los valores de cada objeto mascota */
            const celda = document.createElement("td"); /** crea una celda <td> para cada valor */
            celda.textContent = valor; /** asigna el valor a la celda */
            fila.appendChild(celda); /** agrega la celda a la fila */
         });
         tbody.appendChild(fila); /** agrega la fila al cuerpo de la tabla <tbody> */
    });
    

}