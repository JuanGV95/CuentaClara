/* funciones para crear cuentas */
function ahorros(array) {
    let cuentaTipo = "Ahorro";
    let nombrarCuenta = document.getElementById("nombre-de-meta");
    let cuotasPago = document.getElementById("cuotas-de-meta");
    let valorCuenta = document.getElementById("valor-de-meta");
    const nuevaCuenta = new Cuentas(array.length + 1, cuentaTipo.value, nombrarCuenta.value, cuotasPago.value, valorCuenta.value, 0, "pigIcon.svg");
    //pusheamos al array:
    array.push(nuevaCuenta);
    localStorage.setItem("listaCuentas", JSON.stringify(array))
   mostrarGestionDom(array)

    /* reseteamos los campos macheteramente */
    nombrarCuenta.value = "";
    cuotasPago.value = "";
    valorCuenta.value = ""; 
}
ahorros(listaCuentas);
/* Eventos */


btnAgregarMeta.addEventListener("click", function(event){
    event.preventDefault();
    ahorros(listaCuentas) 
    console.log("Mostrame algo hijueputa")})