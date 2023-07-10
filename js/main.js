/*constructores*/
/*Registro de cuenta nueva*/
class InicioSesion {
    constructor(id, nombrePersona, correo, contrasena) {
        this.id = id,
            this.nombrePersona = nombrePersona,
            this.correo = correo,
            this.contrasena = contrasena
    }
}
/*Cuentas de gastos e ingresos*/
class Cuentas {
    constructor(id, cuenta, nombreCuenta, cuotas, valor, interes, imagen) {
        this.id = id,
            this.cuenta = cuenta,
            this.nombreCuenta = nombreCuenta,
            this.cuotas = cuotas,
            this.valor = valor,
            this.interes = interes,
            this.imagen = imagen
    }

}
class Ingresos {
    constructor(id, cuentaIngreso, nombreIngreso, valorIngreso, imagendeIngreso) {
        this.id = id,
            this.cuentaIngreso = cuentaIngreso,
            this.nombreIngreso = nombreIngreso,
            this.valorIngreso = valorIngreso,
            this.imagendeIngreso = imagendeIngreso
    }
}
/* funcion para calcular las cuotas mensuales segun el interes escrito por la persona */
function valorCuotas(Cuentas) {
    let crearInteres = Cuentas.interes * 0.01;
    let crearValorCuotas = Cuentas.valor / Cuentas.cuotas;
    let crearCuotaMensual = crearValorCuotas * crearInteres;
    let resultadoCuota = crearValorCuotas + crearCuotaMensual;
    return resultadoCuota.toFixed();
}


/*constructores*/

//capturar DOM
let balance = 0;
let fechaActual = document.getElementById("fecha");
let ingresoCuenta = document.getElementById("balance-en-index");
let bienvenida = document.getElementById("usuario__bienvenida");
let gestionDeGastos = document.getElementById("cajaCuentas");
let saldoActual = document.getElementById("saldo-actual");
let dineroQueIngresa = document.getElementById("valor-ingresos");
let gastosTotal = document.getElementById("valor-gastos");
let totalAlFinal = document.getElementById("pronostico-fin");
let boxGastos = document.getElementById("boxGastos");
let boxIngreso = document.getElementById("boxIngreso");
let btnAgregarMeta = document.getElementById("completar-proceso-meta")
/*Arrays*/
let listaIngresos = [];
let listaCuentas = [];
let listaUsuarios = [];
/*Arrays*/


//fecha
const hoy = new Date();
fechaActual.innerHTML = hoy.toDateString();



/* ejemplos de objetos ya creados para usar con filtros/find y sort, en la version final esto se ELIMINA!! */
const nuevaCuenta1 = new Cuentas(1, "Ahorro", "Viaje", 20, 600, 12, "pigIcon.svg");
const nuevaCuenta2 = new Cuentas(2, "Credito", "Credito Estudiantil", 36, 5000, 12, "creditIcon.svg");
const nuevaCuenta3 = new Cuentas(3, "Otro", "Prestamo", 14, 1200, 12, "dotsIcon.svg");
const nuevaCuenta4 = new Cuentas(4, "Ahorro", "Moto", 36, 3000, 12, "pigIcon.svg");
/* ejemplos de objetos ya creados para usar con filtros/find y sort */
/* ejemplos para los ingresos en la version final esto tambien se ELIMINA*/
const nuevoIngreso1 = new Ingresos(1, "Sueldo Fijo", "mensual", 300, "officeBagIcon.svg");
const nuevoIngreso2 = new Ingresos(2, "Trabajo freelance", "mensual", 100, "dotsIcon.svg");
const nuevoIngreso3 = new Ingresos(3, "Venta de servicios", "mensual", 200, "dotsIcon.svg");
const nuevoIngreso4 = new Ingresos(4, "Venta portatil", "mensual", 400, "dotsIcon.svg");
/* ejemplos para los ingresos */

/* Guardamos los array de prueba en el local storage */
if (localStorage.getItem("listaCuentas")) {
    listaCuentas = JSON.parse(localStorage.getItem("listaCuentas"));
} else {
    console.log("seteamos el Array listaCuentas");
    listaCuentas.push(nuevaCuenta1, nuevaCuenta2, nuevaCuenta3, nuevaCuenta4);
    localStorage.setItem("listaCuentas", JSON.stringify(listaCuentas));
}
/* - - - - - - - - - - - -  */

if (localStorage.getItem("listaIngresos")) {
    listaIngresos = JSON.parse(localStorage.getItem("listaIngresos"));
} else {
    console.log("seteamos Lista de Ingresos");
    listaIngresos.push(nuevoIngreso1, nuevoIngreso2, nuevoIngreso3, nuevoIngreso4);
    localStorage.setItem("listaIngresos", JSON.stringify(listaIngresos));
}
/* seccion para todo DOM */
/* el if Sirve para que solo esta seccion de js funcione en index esta chevere es como un scope */
if (window.location.href.includes("index.html")) {
    function mostrarGestionDom(array) {
        gestionDeGastos = ``;
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
}
if (window.location.href.includes("gastos.html")) {
    function gastosCreados(array) {
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
}
if (window.location.href.includes("ingresos.html")) {
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
}
/* Seccion filtro/buscar de index o pagina de gestion de pagos */
