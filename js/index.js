saldoEnVivo.innerHTML = `$ ${balanceIngresado} USD`;
saldoActual.innerHTML = `$ ${balanceIngresado} USD`;
dineroQueIngresa.innerHTML = `$${balanceIngresado} USD`; 
gastosTotal.innerHTML = `$ ${sumarGastos} USD`;
totalAlFinal.innerHTML = `$ ${saldoFinal} USD`;
//fecha
const hoy = new Date();
fechaActual.innerHTML = hoy.toDateString(); 

function mostrarGestionDom(array) {
    gestionDeGastos.innerHTML = ``
    for (let nuevaCuenta of array) {
        let gestionPendiente = document.createElement("article")
        gestionPendiente.className = "gestionCuentas"
        gestionPendiente.innerHTML = `
        <img src="assets/img/${nuevaCuenta.imagen}" alt="un cerdito de ahorro">
    <div>
        <h2>${nuevaCuenta.nombreCuenta}</h2>
        <p>${nuevaCuenta.cuenta}</p>
    </div>
    <p>$ ${valorCuotas(nuevaCuenta)} USD</p>
    <div id="cuadroPendiente">
        <p>Pendiente</p>
    </div>
    <button id="btnGestionar">Gestionar</button>`
        gestionDeGastos.appendChild(gestionPendiente)
    }

}
mostrarGestionDom(listaCuentas);


function buscarInfoIndex(buscado, array){

    
    let busqueda = array.filter(
       (dato) => dato.cuenta.toLowerCase().includes(buscado.toLowerCase()) || dato.nombreCuenta.toLowerCase().includes(buscado.toLowerCase())
    )
  
    busqueda.length == 0 ?
    (resultadoBusquedaIndex.innerHTML = `<h3>No hay coincidencias con la búsqueda ${buscado}</h3>`,
    mostrarGestionDom(busqueda)) :
    (resultadoBusquedaIndex.innerHTML = "", mostrarGestionDom(busqueda))
  }

  cajaIndex.addEventListener("input", () => {
    buscarInfoIndex(cajaIndex.value, listaCuentas)
 })