//este es un ejemplo que quiero desarrollar para mi proyecto final
//la idea es un aplicativo con el que se pueda llevar registro de ingresos
//egresos y mas adelante planeo añadir funciones para control de gastos
//impuestos y cuotas faltantes para 
//let cuenta es el valor general de la cuenta
let balance = 5000;

/*constructores*/
class Cuentas {
    constructor(id, cuenta, nombreCuenta, cuotas, valor, valorCuota) {
        this.id = id,
            this.cuenta = cuenta,
            this.nombreCuenta = nombreCuenta,
            this.cuotas = cuotas,
            this.valor = valor
    }
}
class Ingresos {
    constructor(id, nombreIngreso, valorIngreso) {
        this.id = id,
            this.nombreIngreso = nombreIngreso,
            this.valorIngreso = valorIngreso
    }
}
/*constructores*/
//con esta funcion inicializamos el proceso, se debe ingresar un valor para poder acceder al menu
function nombre() {
    let nombreI = prompt("Ingresa tu nombre");
    if (nombreI == "") {
        nombre();
    } else {
        saludar(nombreI);
    }
}
function saludar(persona) {
    alert(`Bienvenido/a ${persona} ¿Qué deseas hacer?`);
}
nombre();
/*Arrays*/
const listaCuentas = [];
const listaIngresos = [];
/*Arrays*/
/* ejemplos de objetos ya creado para usar con filtros/find y sort | en la version final esto se ELIMINA!! */
const nuevaCuenta1 = new Cuentas(1, "Ahorro", "Viaje", 12, 2000);
const nuevaCuenta2 = new Cuentas(2, "Credito", "Credito Estudiantil", 24, 5000);
const nuevaCuenta3 = new Cuentas(3, "Otro", "Prestamo", 12, 1200);
const nuevaCuenta4 = new Cuentas(4, "Ahorro", "Moto", 36, 3000);
listaCuentas.push(nuevaCuenta1, nuevaCuenta2, nuevaCuenta3, nuevaCuenta4);
/* ejemplos de objetos ya creado para usar con filtros/find y sort */
/* ejemplos para los ingresos en la version final esto tambien se ELIMINA*/
const nuevoIngreso1 = new Ingresos(1, "Trabajo freelance", 100);
const nuevoIngreso2 = new Ingresos(2, "Venta de servicios", 200);
const nuevoIngreso3 = new Ingresos(3, "Venta portatil", 400);
listaIngresos.push(nuevoIngreso1, nuevoIngreso2, nuevoIngreso3);
/* ejemplos para los ingresos */

function tipoDeCuenta() {
    let cuentaAgregada = parseInt(prompt(`Ingresa el tipo de cuenta que deseas agregar
    1 - Ahorro
    2 - Creditos
    3 - Otro
    4 - Volver atras
    `))
    switch (cuentaAgregada) {
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
    function ahorros() {
        let cuentaTipo = "Ahorro";
        let nombrarCuenta = prompt("Nombra tu ahorro");
        let cuotasPago = parseInt(prompt("¿En cuantas cuotas quieres lograr tu meta?"))
        let valorCuenta = parseInt(prompt("¿Cuanto quieres ahorrar?"));

        const nuevaCuenta = new Cuentas(listaCuentas.length + 1, cuentaTipo, nombrarCuenta, cuotasPago, valorCuenta);
        //pusheamos al array:
        listaCuentas.push(nuevaCuenta);
    }
    function credito() {
        let cuentaTipo = "Credito";
        let nombrarCuenta = prompt("Nombre de tu credito");
        let cuotasPago = parseInt(prompt("Elige las cuotas de tu credito"))
        let valorCuenta = parseInt(prompt("Cual es el valor de tu credito?"));

        const nuevaCuenta = new Cuentas(listaCuentas.length + 1, cuentaTipo, nombrarCuenta, cuotasPago, valorCuenta)
        //pusheamos al array:
        listaCuentas.push(nuevaCuenta);
    }
    function otrasCuentas() {
        let cuentaTipo = "Otro";
        let nombrarCuenta = prompt("Nombra tu Gasto");
        let cuotasPago = parseInt(prompt("Elige las cuotas de tu gasto"))
        let valorCuenta = parseInt(prompt("Cual es el valor del gasto?"));

        const nuevaCuenta = new Cuentas(listaCuentas.length + 1, cuentaTipo, nombrarCuenta, cuotasPago, valorCuenta)
        //pusheamos al array:
        listaCuentas.push(nuevaCuenta);
    }

}
function verCuentas(array) {
    //Un ciclo que me permita recorrer todo un array de objetos y acceder a sus propiedades:
    console.log(`Tus cuentas son: `)
    //FOR OF: sirve para recorrer un array por dentro
    for (let Cuentas of array) {
        console.log(Cuentas.id, Cuentas.cuenta, Cuentas.nombreCuenta, Cuentas.cuotas, Cuentas.valor)
    }
    let opcionCuentas = parseInt(prompt(`Que deseas hacer?
    1 - Filtrar cuenta
    2 - Ordenar listado
    3 - Eliminar cuenta
    4 - Volver atras
    `));
    switch (opcionCuentas) {
        case 1:
            buscarCuenta(listaCuentas);
            break
        case 2:
            ordenar(listaCuentas);
            break
        case 3:
            eliminar(listaCuentas);
            break
        case 4:
            menu();
            break
        default:
            alert("Elige una opcion del menu");
            verCuentas();
    }
}
/* Filtros */
//buscar cuenta
function buscarCuenta(array) {
    let buscaCuentas = prompt("Elige el nombre de cuenta o tipo de cuenta que quieras filtrar");
    let busqueda = array.filter(
        (dato) => dato.nombreCuenta.toLowerCase().includes(buscaCuentas.toLowerCase()) || dato.cuenta.toLowerCase().includes(buscaCuentas.toLowerCase())
    )
    if (busqueda.length == 0) {
        console.log(`La Cuenta ${buscaCuentas} no estra en nuestro listado`)
    } else {
        verCuentas(busqueda);
    }
}
//buscar Ingreso
function buscarIngreso(array) {
    let buscaIngresos = prompt("Elige el nombre del que quieras filtrar");
    let busqueda = array.filter(
        (dato) => dato.nombreIngreso.toLowerCase().includes(buscaIngresos.toLowerCase()) 
    )
    if (busqueda.length == 0) {
        console.log(`La Cuenta ${buscaIngresos} no estra en nuestro listado`)
    } else {
        verIngresos(busqueda);
    }
}
//ordenar cuentas
function ordenarMenorMayor(array){
 const menorMayor = [].concat(array);
 menorMayor.sort((elem1 , elem2) => elem1.valor - elem2.valor)
 verCuentas(menorMayor);
}

function ordenarMayorMenor(array){
    const mayorMenor = [].concat(array);
    mayorMenor.sort((elem1 , elem2) => elem2.valor - elem1.valor)
    verCuentas(mayorMenor);
}

function ordenAlfabetico(array){
    const arrayAlfabetico = [].concat(array)
    arrayAlfabetico.sort((a,b) =>{
        if(a.nombreCuenta > b.nombreCuenta){
            return 1
        }
        if(a.nombreCuenta < b.nombreCuenta){
            return -1
        }
        return 0
    })
    verCuentas(arrayAlfabetico)
}
//ordenar ingresos
function ordenarIngresoMenorMayor(array){
    const menorMayor = [].concat(array);
    menorMayor.sort((elem1 , elem2) => elem1.valorIngreso - elem2.valorIngreso)
    verIngresos(menorMayor);
   }
   
   function ordenarIngresoMayorMenor(array){
       const mayorMenor = [].concat(array);
       mayorMenor.sort((elem1 , elem2) => elem2.valorIngreso - elem1.valorIngreso)
       verIngresos(mayorMenor);
   }
   
   function ordenIngresoAlfabetico(array){
       const arrayAlfabetico = [].concat(array)
       arrayAlfabetico.sort((a,b) =>{
           if(a.nombreIngreso > b.nombreIngreso){
               return 1
           }
           if(a.nombreIngreso < b.nombreIngreso){
               return -1
           }
           return 0
       });
       verIngresos(arrayAlfabetico)
   }
   

//eliminar cuentas
function eliminar(array){
    let eliminarID = parseInt(prompt("Elige el Id de la cuenta a eliminar"))
    let cuentaID = array.map(cuenta => cuenta.id);
    console.log(cuentaID);

    let indice = cuentaID.indexOf(eliminarID);
    console.log(indice);
    array.splice(indice, 1)
    verCuentas(array);
}
//eliminar ingreso
function eliminarIngreso(array){
    let eliminarID = parseInt(prompt("Elige el Id del ingreso a eliminar"))
    let ingresoID = array.map(cuenta => cuenta.id);
    console.log(ingresoID);

    let indice = ingresoID.indexOf(eliminarID);
    console.log(indice);
    array.splice(indice, 1)
    verIngresos(array);
}


/* Filtros */
function ordenar(array){
    let opcion = parseInt(prompt(`
    1 - Ordenar de menor a mayor
    2 - Ordenar de mayor a menor
    3 - Ordenar alfabeticamente
    4 - Volver atras
    `))
    switch(opcion){
        case 1:
            ordenarMenorMayor(array);
            break
        case 2:
            ordenarMayorMenor(array);
            break
        case 3:
            ordenAlfabetico(array);
            break
        case 4:
            menu();
            break 
            default:
                alert("elige una opcion valida")
                ordenar();           
    }
}
//ordenar Ingresos
function ordenarIngreso(array){
    let opcion = parseInt(prompt(`
    1 - Ordenar de menor a mayor
    2 - Ordenar de mayor a menor
    3 - Ordenar alfabeticamente
    4 - Volver atras
    `))
    switch(opcion){
        case 1:
            ordenarIngresoMenorMayor(array);
            break
        case 2:
            ordenarIngresoMayorMenor(array);
            break
        case 3:
            ordenIngresoAlfabetico(array);
            break
        case 4:
            menu();
            break  
            default:
                alert("elige una opcion valida");
                ordenarIngreso();          
    }
}

function verIngresos(array) {
    console.log(`Tus ingresos fueron: `)
    for (let Ingresos of array) {
        console.log(Ingresos.id, Ingresos.nombreIngreso, Ingresos.valorIngreso)
    }
    let opcionIngresos = parseInt(prompt(`Que deseas hacer?
    1 - Filtrar ingreso
    2 - Ordenar listado
    3 - Eliminar ingreso
    4 - Volver atras
    `))
    switch (opcionIngresos) {
        case 1:
            buscarIngreso(listaIngresos);
            break
        case 2:
            ordenarIngreso(listaIngresos);
            break
        case 3:
            eliminarIngreso(listaIngresos);
            break
        case 4:
            menu();
            break
        default:
            alert("Elige una opcion del menu");
            verIngresos();
    }
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
function ingreso() {
    let nombraIngreso = prompt("De donde viene tu ingreso")
    let valorDelIngreso = parseInt(prompt("Cual es el valor del ingreso?"));

    const nuevoIngreso = new Ingresos(listaIngresos.length + 1, nombraIngreso, valorDelIngreso)
    balance = valorDelIngreso + balance;

    alert(`Tu saldo actual se a actualizado.
tu nuevo saldo es: $${balance}
    `);
    listaIngresos.push(nuevoIngreso);
}
/* OPERACIONES */

/* OPERACIONES */

//El Menu fue realizado en base al ejemplo visto en clase 
function menu() {
    let salida = false;
    do {
        let opciones = parseInt(prompt(`Ingresa la opción que deseas realizar
            1 - Revisar saldo Actual
            2 - Ingresar sueldo
            3 - Ingresos varios
            4 - Agregar una cuenta
            5 - Ver cuentas 
            6 - Ver ingresos ocacionales
            0 - Salir`))
        switch (opciones) {
            case 1:
                revSaldo();
                break

            case 2:
                baseMensual();
                break
            case 3:
                ingreso();
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
            case 0:
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