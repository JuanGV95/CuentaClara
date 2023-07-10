/* calcular total de Ingresos actual */
let sumarIngresos = 0;
for(let losIngresos of listaIngresos){
    sumarIngresos += losIngresos.valorIngreso;
}
/* sumar ingresos al balance */
let balanceIngresado = sumarIngresos;
saldoActual.innerHTML = `$ ${balanceIngresado} USD`;
dineroQueIngresa.innerHTML = `$${balanceIngresado} USD`;
ingresoCuenta.innerHTML = `$${balanceIngresado} USD`;

/* Calcular total de en Gastos */
let sumarGastos = 0;
for (let losGastos of listaCuentas){
    let totalGastosCuota = valorCuotas(losGastos)
    sumarGastos += Number(totalGastosCuota);
}
gastosTotal.innerHTML = `$ ${sumarGastos} USD`;
/* calcular diferencia entre balance actual y gastos del mes */
let pronosticoFinDe = 0;
for (let pronostico of listaCuentas){
    let totalCuota = valorCuotas(pronostico);
    pronosticoFinDe += Number(totalCuota);
}
let saldoFinal = balanceIngresado - pronosticoFinDe;
totalAlFinal.innerHTML = `$ ${saldoFinal} USD`

/* funciones para crear cuentas */
