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
let btnAgregarMeta = document.getElementById("completar-proceso-meta");
let btnAgregarMetaCredito = document.getElementById("completar-proceso");
let btnAgregarOtro = document.getElementById("completar-proceso-otro");
let resultadoBusqueda = document.getElementById("resultadoBusqueda");
let resultadoBusquedaIndex = document.getElementById("resultadoBusquedaIndex");
let resultadoBusquedaIngreso = document.getElementById("resultadoBusquedaIngreso");
let cajaGastos = document.getElementById("cajaGastos");
let cajaIndex = document.getElementById("caja");
let cajaIngreso = document.getElementById("cajaIngreso");
let actualizarSueldoFijo = document.getElementById("actualizar-sueldo-fijo");
let saldoEnVivo = document.getElementById("saldo-en-vivo");
/*Arrays*/
let listaIngresos = [];
let listaCuentas = [];
let listaUsuarios = [];
/*Arrays*/






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

/* calcular total de Ingresos actual */
let sumarIngresos = 0;
for(let losIngresos of listaIngresos){
    sumarIngresos += losIngresos.valorIngreso;
}
/* sumar ingresos al balance */
let balanceIngresado = sumarIngresos;

/* Calcular total de en Gastos */
let sumarGastos = 0;
for (let losGastos of listaCuentas){
    let totalGastosCuota = valorCuotas(losGastos)
    sumarGastos += Number(totalGastosCuota);
}

/* calcular diferencia entre balance actual y gastos del mes */
let pronosticoFinDe = 0;
for (let pronostico of listaCuentas){
    let totalCuota = valorCuotas(pronostico);
    pronosticoFinDe += Number(totalCuota);
}
let saldoFinal = balanceIngresado - pronosticoFinDe;


/* funciones para crear cuentas */