// Se envuelve todo el código en este evento para asegurar que el script se ejecute
// solo después de que todo el contenido del HTML (el DOM) se haya cargado completamente.
// Esto previene errores al intentar acceder a elementos que aún no existen.
document.addEventListener("DOMContentLoaded", () => {
  // 'filas' almacena el estado actual del puzzle. Se usa 'let' en lugar de 'const'
  // porque su valor se reasigna cuando el usuario actualiza el puzzle desde el formulario.
  let filas = [
    [ null, 1,   8,   3   ],
    [ "+",  2,   3,   4   ],
    [ "line", null, null, null ],
    [ null, 4,   "X", 7   ]
  ];
  
  // --- Referencias a Elementos del DOM ---
  // Se guardan en constantes para un acceso más rápido y un código más limpio.
  const matrizContainer = document.getElementById("matriz-container");
  const verificarBtn     = document.getElementById("verificar-btn");
  const respuestaInput   = document.getElementById("respuesta");
  const resultadoP       = document.getElementById("resultado");

  // Referencias a los campos del formulario de configuración.
  const cfgRow1 = document.getElementById("cfg-row1");
  const cfgRow2 = document.getElementById("cfg-row2");
  const cfgRow4 = document.getElementById("cfg-row4");
  const configBtn = document.getElementById("config-btn");

  /**
   * Dibuja la matriz en la página web basándose en el array 'filas'.
   * Limpia el contenedor y recrea todas las celdas.
   */
  function renderizarMatriz() {
    matrizContainer.innerHTML = "";
    filas.forEach(fila => {
      // línea de separación
      if (fila[0] === "line") {
        const linea = document.createElement("div");
        linea.className = "line";
        linea.style.gridColumn = "1 / -1";
        matrizContainer.appendChild(linea);
        return;
      }
      // Itera sobre cada valor de la fila para crear la celda correspondiente.
      fila.forEach(valor => {
        const celda = document.createElement("div");
        if (valor === null) {
          celda.className = "spacer";
        } else if (valor === "+") {
          celda.className = "celda operator";
          celda.textContent = "+";
        } else {
          celda.className = "celda";
          celda.textContent = valor;
        }
        matrizContainer.appendChild(celda);
      });
    });
  }

  /**
   * Calcula el valor correcto de "X" basándose en la lógica del puzzle.
   * La regla es: (fila1 + fila2) % 10 = fila3.
   * @returns {number | null} El valor numérico de "X" o null si no se encuentra.
   */
  function calcularSolucion() {
    let xRow = -1;
    let xCol = -1;

    // 1. Encontrar la posición (fila y columna) de "X" en la matriz.
    for (let i = 0; i < filas.length; i++) {
        // Solo buscamos en las filas de números (índices 0, 1, 3)
        if (i === 2) continue; // Saltar la línea de separación

        const colIndex = filas[i].indexOf("X");
        if (colIndex !== -1) {
            xRow = i;
            xCol = colIndex;
            break;
        }
    }

    if (xRow === -1) {
        console.error("Error: No se encontró la \"X\" en la matriz.");
        return null; // "X" no encontrada
    }

    // 2. Obtener los valores de la misma columna donde se encontró "X".
    const val1 = filas[0][xCol];
    const val2 = filas[1][xCol];
    const val3 = filas[3][xCol];

    // 3. Calcular el valor de "X" dependiendo de la fila en la que se encuentre.
    // La nueva lógica es que la suma solo considera el último dígito.
    // Usamos el operador módulo (%) para obtener el resto de una división por 10.
    if (xRow === 0) { // X está en la primera fila
        const resultado = val3 - val2;
        // ((n % 10) + 10) % 10 asegura un resultado positivo entre 0 y 9.
        return ((resultado % 10) + 10) % 10;
    } else if (xRow === 1) { // X está en la segunda fila
        const resultado = val3 - val1;
        return ((resultado % 10) + 10) % 10;
    } else if (xRow === 3) { // X está en la fila de resultados
        return (val1 + val2) % 10;
    }

    return null; // No debería llegar aquí
  }

  /**
   * Compara la respuesta del usuario con la solución correcta y muestra
   * un mensaje de "Correcto" o "Incorrecto".
   */
  function verificarRespuesta() {
    const solucion = calcularSolucion();
    const userVal  = parseFloat(respuestaInput.value); // Convierte el texto del input a número.

    if (isNaN(userVal)) {
      resultadoP.textContent = "Por favor, introduce un número.";
      resultadoP.className = "incorrecto show";
      return;
    }
    if (userVal === solucion) {
      resultadoP.textContent = `¡Correcto! El valor de "X" es ${solucion}.`;
      resultadoP.className = "correcto show";
    } else {
      resultadoP.textContent = `¡Incorrecto! La respuesta correcta era ${solucion}.`;
      resultadoP.className = "incorrecto show";
    }
  }

  // --- Event Listeners ---

  // Se ejecuta cuando el usuario hace clic en el botón "Actualizar Puzzle".
  configBtn.addEventListener("click", () => {
    /**
     * Función auxiliar para convertir una cadena de texto (ej: "1, X, 3")
     * en un array de números y la letra "X".
     * @param {string} str - La cadena de texto del input.
     */
    const parseRow = str => str.split(",").map(v => {
      const t = v.trim();
      if (t.toUpperCase() === "X") return "X";
      if (t === "+") return "+";
      return Number(t);
    });

    const row1 = parseRow(cfgRow1.value);
    const row2 = parseRow(cfgRow2.value);
    const row4 = parseRow(cfgRow4.value);

    // Reconstruye la variable 'filas' con los nuevos datos del formulario.
    filas = [ 
      [ null, ...row1 ],
      [ "+", ...row2 ],
      [ "line", null, null, null ],
      [ null, ...row4 ]
    ];

    resultadoP.className = "";     // oculta resultado anterior
    respuestaInput.value = "";     // limpia input de respuesta
    renderizarMatriz();            // Vuelve a dibujar la matriz con los nuevos valores.
  });

  // Se ejecuta cuando el usuario hace clic en el botón "Verificar".
  verificarBtn.addEventListener("click", verificarRespuesta);

  // Dibuja la matriz por primera vez cuando la página se carga.
  renderizarMatriz();
});