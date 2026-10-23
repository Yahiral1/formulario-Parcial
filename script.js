const formulario = document.getElementById("formulario");
const asignatura = document.getElementById("asignatura");
const nota = document.getElementById("nota");
const tabla = document.getElementById("tablaRegistros");
const mensaje = document.getElementById("mensaje");

let contador = 0;

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombreAsignatura = asignatura.value;
    const valorNota = nota.value.trim();
    const numeroNota = Number(valorNota);

    // Validar los datos
    if (nombreAsignatura === "" || valorNota === "") {
        mensaje.textContent = "Debes completar todos los campos.";
        mensaje.style.color = "red";
        return;
    }

    if (!Number.isFinite(numeroNota) ||
        numeroNota < 0 ||
        numeroNota > 100) {

        mensaje.textContent = "La nota debe estar entre 0 y 100.";
        mensaje.style.color = "red";
        return;
    }

    // Determinar el resultado
    let resultado;

    if (numeroNota >= 51) {
        resultado = "Aprobado";
    } else {
        resultado = "Reprobado";
    }

    // Crear una nueva fila
    contador++;

    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${contador}</td>
        <td></td>
        <td>${numeroNota}</td>
        <td>${resultado}</td>
    `;

    fila.children[1].textContent = nombreAsignatura;

    tabla.appendChild(fila);

    // Mostrar mensaje
    mensaje.textContent = "Registro agregado correctamente.";
    mensaje.style.color = "green";

    // Limpiar el formulario
    formulario.reset();
});