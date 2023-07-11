
function gastosCreados(array) {
    boxGastos.innerHTML = ``
    for (let mostrarGastosCreados of array) {
        let crearGastoCard = document.createElement("section")
        crearGastoCard.className = "cardGastos"
        crearGastoCard.innerHTML = ` <div class="cardIconos">
    <img src="../assets/img/${mostrarGastosCreados.imagen} " alt="Icono de alcancia">
    <img src="../assets/img/trashIcon.svg" alt="icono para borrar" id="borrarCard">
</div>
    <h2> ${mostrarGastosCreados.nombreCuenta} </h2>
    <p> ${mostrarGastosCreados.cuenta}</p>
    <p>${mostrarGastosCreados.cuotas} cuotas</p>
    <h2 class="montoPago">$ ${mostrarGastosCreados.valor} USD</h2>`
        boxGastos.appendChild(crearGastoCard);
    }
}
gastosCreados(listaCuentas);