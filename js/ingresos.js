function ingresosCreados(array) {
    for (let mostrarIngresos of array) {
        let crearIngreso = document.createElement("section")
        crearIngreso.className = "cardIngreso"
        crearIngreso.innerHTML = ` 
        <div class="cardIconoIngreso">
        <img src="../assets/img/${mostrarIngresos.imagendeIngreso}"
        alt="Icono de alcancia">
        <img src="../assets/img/trashIcon.svg" alt="icono para borrar"
        id="borrarCard"></div>
<h2>${mostrarIngresos.cuentaIngreso}</h2>
<p>${mostrarIngresos.nombreIngreso} </p>
<h2 class="montoPagoIngreso">$ ${mostrarIngresos.valorIngreso} USD</h2>`
        boxIngreso.appendChild(crearIngreso);
    }
}
ingresosCreados(listaIngresos);