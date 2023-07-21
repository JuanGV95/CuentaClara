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

//buscador
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

 //Ordenador

 let btnOrdenarGastosIndex = document.getElementById("ordenGastoIndex");

 function ordenarGastosMenorMayor(array){
    const menorMayor = [].concat(array);
    menorMayor.sort((elem1, elem2) => elem1.valor - elem2.valor)
    mostrarGestionDom(menorMayor);
 };

 function ordenarGastosMayorMenor(array){
    const mayorMenor = [].concat(array);
    mayorMenor.sort((elem1, elem2) => elem2.valor - elem1.valor)
    mostrarGestionDom(mayorMenor);
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
    mostrarGestionDom(gastoAlfabetico);
 };

 btnOrdenarGastosIndex.addEventListener("change", () => {
    switch (btnOrdenarGastosIndex.value) {
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