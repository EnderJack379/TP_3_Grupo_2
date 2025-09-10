export function actualizarTabla(mascotas) {

    const tbody = document.querySelector("#tablaMascotas tbody");
    tbody.innerHTML = "";

    mascotas.forEach(mascotas => {
        const fila = document.createElement("tr");
        Object.values(mascotas).forEach(valor => {
            const celda = document.createElement("td");
            celda.textContent = valor;
            fila.appendChild(celda);
         });
         tbody.appendChild(fila);
    });
    

}