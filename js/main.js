/*constructores*/
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
let modalGestionarCuenta = document.getElementById("modal-gestionar-cuenta");



/*Arrays*/
/* let listaUsuarios = [];  EN CONTRUCCION*/
let listaIngresos = [];
let listaCuentas = [];
let sumarIngresos = 0;
let balanceIngresado = sumarIngresos;
let sumarGastos = 0;
let pronosticoFinDe = 0;
let saldoFinal = balanceIngresado - pronosticoFinDe;
