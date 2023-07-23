
/* funciones para crear cuentas */
function ahorros(listaCuentas) {
    let cuentaTipo = "Ahorro";
    let nombrarCuenta = document.getElementById("nombre-de-meta");
    let cuotasPago = document.getElementById("cuotas-de-meta");
    let valorCuenta = document.getElementById("valor-de-meta");
    const nuevaCuenta = new Cuentas(listaCuentas.length + 1, cuentaTipo, nombrarCuenta.value, cuotasPago.value, valorCuenta.value, 0, "pigIcon.svg");
    
    //pusheamos al array:
    listaCuentas.push(nuevaCuenta);
    localStorage.setItem("listaCuentas", JSON.stringify(listaCuentas))
    window.location.href = "gastos.html";

}



// Eventos 


btnAgregarMeta.addEventListener("click", () => {
    listaCuentas = JSON.parse(localStorage.getItem("listaCuentas"));
    console.log(listaCuentas)
    ahorros(listaCuentas);
    
});

