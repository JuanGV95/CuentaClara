/* si ves esto es muy posible que la funcion no este funcionando bien por ese if preguntame*/
saldoActual.innerHTML = `$ ${balanceIngresado} USD`;
dineroQueIngresa.innerHTML = `$${balanceIngresado} USD`; 
gastosTotal.innerHTML = `$ ${sumarGastos} USD`;
totalAlFinal.innerHTML = `$ ${saldoFinal} USD`;

function mostrarGestionDom(array) {
    for (let nuevaCuenta of array) {
        let gestionPendiente = document.createElement("article")
        gestionPendiente.className = "gestionCuentas"
        gestionPendiente.innerHTML = `<img src="assets/img/${nuevaCuenta.imagen}" alt="un cerdito de ahorro">
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
