



function gastosCreados(array) {
    boxGastos.innerHTML = ``
    for (let mostrarGastosCreados of array) {
        let crearGastoCard = document.createElement("section")
        crearGastoCard.className = "cardGastos"
        crearGastoCard.innerHTML = ` 
        <div class="cardIconos">
    <img src="../assets/img/${mostrarGastosCreados.imagen} " alt="Icono de alcancia">
    <img src="../assets/img/trashIcon.svg" alt="icono para borrar" id="borrarCard${listaCuentas.id} ">
</div>
    <h2> ${mostrarGastosCreados.nombreCuenta} </h2>
    <p> ${mostrarGastosCreados.cuenta}</p>
    <p>${mostrarGastosCreados.cuotas} cuotas</p>
    <h2 class="montoPago">$ ${mostrarGastosCreados.valor} USD</h2>`
        boxGastos.appendChild(crearGastoCard);
    }
}

gastosCreados(listaCuentas);



/* Buscador */
function buscarInfo(buscado, array){

    
    let busqueda = array.filter(
       (dato) => dato.cuenta.toLowerCase().includes(buscado.toLowerCase())  || dato.nombreCuenta.toLowerCase().includes(buscado.toLowerCase())
    )
  
    busqueda.length == 0 ?
    (resultadoBusqueda.innerHTML = `<h3>No hay coincidencias con la búsqueda ${buscado}</h3>`,
    gastosCreados(busqueda)) :
    (resultadoBusqueda.innerHTML = "", gastosCreados(busqueda))
  }

  cajaGastos.addEventListener("input", () => {
    buscarInfo(cajaGastos.value, listaCuentas)
 })