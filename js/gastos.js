//fecha
const hoy = new Date();
fechaActual.innerHTML = hoy.toDateString(); 
saldoEnVivo.innerHTML = `$ ${balanceIngresado} USD`;

function gastosCreados(array) {
    boxGastos.innerHTML = ``
    for (let mostrarGastosCreados of array) {
        let crearGastoCard = document.createElement("section")
        crearGastoCard.className = "cardGastos"
        crearGastoCard.innerHTML = ` 
        <div class="cardIconos">
    <img src="../assets/img/${mostrarGastosCreados.imagen} " alt="Icono de alcancia">
    <a href=""  id="borrarCard${mostrarGastosCreados.id}"><img src="../assets/img/trashIcon.svg" alt="icono para borrar"></a>
</div>
    <h2> ${mostrarGastosCreados.nombreCuenta} </h2>
    <p> ${mostrarGastosCreados.cuenta}</p>
    <p>${mostrarGastosCreados.cuotas} cuotas</p>
    <h2 class="montoPago">$ ${mostrarGastosCreados.valor} USD</h2>`
        boxGastos.appendChild(crearGastoCard);
    }
    array.forEach((mostrarGastosCreados) => {
        //manipular el DOM sin guardar en variable
        document.getElementById(`borrarCard${mostrarGastosCreados.id}`).addEventListener("click", () => {
           console.log(`Eliminar producto`)
           //borrar del DOM
           let cardProducto = document.getElementById(`borrarCard${mostrarGastosCreados.id}`)
           cardProducto.remove()
           //borrar del array
           //encontramos objeto a eliminar
           let productoEliminar = array.find((cuentas) => cuentas.id == mostrarGastosCreados.id)
           console.log(productoEliminar)
           //buscar indice
           let posicion = array.indexOf(productoEliminar)
           console.log(posicion)
           array.splice(posicion,1)
           console.log(array)
           //setear storage
           localStorage.setItem("listaCuentas", JSON.stringify(array))
        })
    
    })
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

 //Ordenar Gastos
 let btnOrdenarGastos = document.getElementById("btn-ordenar-gastos");

 function ordenarGastosMenorMayor(array){
    const menorMayor = [].concat(array);
    menorMayor.sort((elem1, elem2) => elem1.valor - elem2.valor)
    gastosCreados(menorMayor);
 };

 function ordenarGastosMayorMenor(array){
    const mayorMenor = [].concat(array);
    mayorMenor.sort((elem1, elem2) => elem2.valor - elem1.valor)
    gastosCreados(mayorMenor);
 };

 function ordenGastoAlfabetico(array){
    const gastoAlfabetico = [].concat(array)
    gastoAlfabetico.sort((a, b) => {
        if (a.nombreCuenta > b.nombreCuenta){
            return 1
        }
        if(a.nombreCuenta < b.nombreCuenta){
            return -1
        }
        return 0
    });
    gastosCreados(gastoAlfabetico);
 };

 btnOrdenarGastos.addEventListener("change", () => {
    switch (btnOrdenarGastos.value) {
        case "1":
            ordenarGastosMenorMayor(listaCuentas);
            break;
        case "2":
            ordenarGastosMayorMenor(listaCuentas); 
            break;
        case "3":
            ordenGastoAlfabetico(listaCuentas);
            break;    
        default:
            break;
    }
 })









