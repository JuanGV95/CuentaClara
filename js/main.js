//este es un ejemplo que quiero desarrollar para mi proyecto final
//la idea es un aplicativo con el que se pueda llevar registro de ingresos
//egresos y mas adelante planeo añadir funciones para control de gastos
//impuestos y cuotas faltantes para 
//let cuenta es el valor general de la cuenta
let balance = 0;
                   /*constructores*/
    class Cuentas{
        constructor (id, cuenta, nombreCuenta, cuotas, valor){
                this.id = id,
                this.cuenta = cuenta,
                this.nombreCuenta = nombreCuenta,
                this.cuotas = cuotas,
                this.valor = valor
            }
        }
    class Ingresos{
        constructor(id, nombreIngreso, valorIngreso){
            this.id = id,
            this.nombreIngreso = nombreIngreso,
            this.valorIngreso = valorIngreso
        }
    }    
                   /*constructores*/  
                   /*Arrays*/      
const listaCuentas = [];  
const listaIngresos = [];
                   /*Arrays*/ 


function tipoDeCuenta(){
    let cuentaAgregada = parseInt(prompt(`Ingresa el tipo de cuenta que deseas agregar
    1 - Ahorro
    2 - Creditos
    3 - Otro
    4 - Volver atras
    `))
    switch(cuentaAgregada){
        case 1:
            ahorros();
            break 
        case 2:
            credito();
            break
        case 3:
            otrasCuentas();
            break
        case 4:
            menu();
            break
        default:
            alert("Por favor elige un número habilitado");
            tipoDeCuenta();
                    break                
}
function ahorros(){
    let cuentaTipo = "Ahorro";
    let nombrarCuenta = prompt("Nombra tu ahorro");
    let cuotasPago = parseInt(prompt("En cuantas cuotas quieres lograr tu Meta"))
    let valorCuenta = parseInt(prompt("Cuanto Quieres ahorrar?"));

    const nuevaCuenta = new Cuentas(listaCuentas.length+1, cuentaTipo, nombrarCuenta, cuotasPago, valorCuenta)
    //pusheamos al array:
    listaCuentas.push(nuevaCuenta);
}
function credito(){
    let cuentaTipo = "Credito";
    let nombrarCuenta = prompt("Nombre de tu credito");
    let cuotasPago = parseInt(prompt("Elige las cuotas de tu credito"))
    let valorCuenta = parseInt(prompt("Cual es el valor de tu credito?"));

    const nuevaCuenta = new Cuentas(listaCuentas.length+1, cuentaTipo, nombrarCuenta, cuotasPago, valorCuenta)
    //pusheamos al array:
    listaCuentas.push(nuevaCuenta);
}
function otrasCuentas(){
    let cuentaTipo = "Otro";
    let nombrarCuenta = prompt("Nombra tu Gasto");
    let cuotasPago = parseInt(prompt("Elige las cuotas de tu gasto"))
    let valorCuenta = parseInt(prompt("Cual es el valor del gasto?"));

    const nuevaCuenta = new Cuentas(listaCuentas.length+1, cuentaTipo, nombrarCuenta, cuotasPago, valorCuenta)
    //pusheamos al array:
    listaCuentas.push(nuevaCuenta);
}

}
function verCuentas(array){
    //Un ciclo que me permita recorrer todo un array de objetos y acceder a sus propiedades:
    console.log(`Tus cuentas son: `)
    //FOR OF: sirve para recorrer un array por dentro
    for(let Cuentas of array){
       console.log(Cuentas.id, Cuentas.cuenta, Cuentas.nombreCuenta, Cuentas.cuotas, Cuentas.valor)
    }
 }
function verIngresos(array){
    console.log(`Tus ingresos fueron: `)
    for(let Ingresos of array){
        console.log(Ingresos.id, Ingresos.nombreIngreso, Ingresos.valorIngreso)
    }
}

//con esta funcion inicializamos el proceso, se debe ingresar un valor para poder acceder al menu
function nombre() {
    let nombreI = prompt("Ingresa tu nombre");
    if(nombreI == ""){
        nombre();
    } else {
    saludar(nombreI);}
}
function saludar(persona) {
    alert(`Bienvenido/a ${persona} ¿Qué deseas hacer?`);
}
//Esta funcion nos dice cual es el valor actual en la cuenta que por defecto es 0 cero
function revSaldo() {
    alert(`Su saldo actual es de ${balance} USD`);
}
//Con esta funcion podemos consignar un valor a nuesta cuenta inicial y lo actualiza con su nuevo valor
function baseMensual() {
    let valorIng = parseInt(prompt("Ingresa tu sueldo mensual"));
    balance = valorIng + balance;
    alert(`Su nuevo saldo es de $${balance} USD`);
}
//Con esta funcion podemos retirar valor de nuetra cuenta base 
function retirando() {
    let valorRes = parseInt(prompt("Digita el valor a retirar"));
    if (valorRes > balance) {
        alert("Saldo Insuficiente");
    } else {
        balance = balance - valorRes;
        alert("¡Transaccion exitosa!");
        alert(`Su nuevo saldo es de ${balance} USD`);
    }
}
nombre();
//El Menu fue realizado en base al ejemplo visto en clase 
function menu(){
    let salida = false;
    do {
        let opciones = parseInt(prompt(`Ingresa la opción que deseas realizar
            1 - Revisar saldo
            2 - Ingresar Sueldo
            3 - Retirar
            4 - Agregar una cuenta
            5 - Ver Cuentas 
            6 - Ver Ingresos
            7 - Salir`))
        switch (opciones) {
            case 1:
                revSaldo();
                break

            case 2:
                baseMensual();
                break
            case 3:
                retirando();
                break
            case 4:
                tipoDeCuenta();
                break
            case 5: 
                verCuentas(listaCuentas);
                break
            case 6:
                verIngresos(listaIngresos);
                break
            case 7:
                alert("Usaste la salida segura, ¡hasta pronto!");
                salida = true;
                break
            default:
                    alert("Este menu esta en construcción, por favor elige un número habilitado");
                    break
        }
    } while (!salida);
}
menu();