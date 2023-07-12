function ingresosCreados(array) {
    boxIngreso.innerHTML = ``
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





/* Buscador */
function buscarInfoIngreso(buscado, array){

    
    let busqueda = array.filter(
       (dato) => 
       dato.cuentaIngreso.toLowerCase().includes(buscado.toLowerCase())  || dato.nombreIngreso.toLowerCase().includes(buscado.toLowerCase())
    )
  
    busqueda.length == 0 ?
    (resultadoBusquedaIngreso.innerHTML = `<h3>No hay coincidencias con la búsqueda ${buscado}</h3>`,
    ingresosCreados(busqueda)) :
    (resultadoBusquedaIngreso.innerHTML = "", ingresosCreados(busqueda))
  }

  cajaIngreso.addEventListener("input", () => {
    buscarInfoIngreso(cajaIngreso.value, listaIngresos)
 })
// la prueba
 