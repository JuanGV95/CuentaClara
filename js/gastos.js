//fecha
const hoy = new Date();
fechaActual.innerHTML = hoy.toDateString();
saldoEnVivo.innerHTML = `$ ${balanceIngresado} USD`;
//Cargamos las Cuentas desde la API
const cargarCuentas = async () => {
    const r = await fetch(`../js/json/cuentas.json`);
    const d = await r.json()

    for (let cuenta of d) {
        let nuevaCuenta = new Cuentas(cuenta.id, cuenta.cuenta, cuenta.nombreCuenta, cuenta.cuotas, cuenta.valor, cuenta.interes, cuenta.imagen);
        listaCuentas.push(nuevaCuenta);

    };
    localStorage.setItem("listaCuentas", JSON.stringify(listaCuentas));
    gastosCreados(d)
};

if (localStorage.getItem("listaCuentas")) {
    listaCuentas = JSON.parse(localStorage.getItem("listaCuentas"));
} else {
    console.log("seteamos el Array listaCuentas");
    cargarCuentas();

}
//Funcion para mostrar las cuentas en el DOM
function gastosCreados(array) {
    boxGastos.innerHTML = ``
    for (let mostrarGastosCreados of array) {
        let crearGastoCard = document.createElement("section")
        crearGastoCard.className = "cardGastos"
        crearGastoCard.innerHTML = ` 
        <div class="cardIconos">
    <img src="../assets/img/${mostrarGastosCreados.imagen} " alt="Icono de alcancia">
    <a href=""  id="borrarCard${mostrarGastosCreados.id}"><img src="../assets/img/trashIcon.svg" alt="icono para borrar"></a>
</div>
    <h2> ${mostrarGastosCreados.nombreCuenta} </h2>
    <p> ${mostrarGastosCreados.cuenta}</p>
    <p>${mostrarGastosCreados.cuotas} cuotas</p>
    <h2 class="montoPago">$ ${mostrarGastosCreados.valor} USD</h2>`
        boxGastos.appendChild(crearGastoCard);
    }
    //juntamos SweetAlert con la funcion para eliminar card y dar dinamismo
    array.forEach((mostrarGastosCreados) => {
        document.getElementById(`borrarCard${mostrarGastosCreados.id}`).addEventListener("click", function (event) {
            event.preventDefault()
            Swal.fire({
                title: 'Eliminar gasto',
                text: "¿Estás seguro de esta acción? se eliminará de forma permanente.",
                showCancelButton: true,
                confirmButtonColor: '#E72252',
                cancelButtonColor: '#40394A',
                cancelButtonText: 'Cancelar',
                confirmButtonText: 'Confirmar'
            }).then((result) => {
                if (result.isConfirmed) {
                    console.log(`Eliminar producto`)
                    //borrar del DOM
                    let cardProducto = document.getElementById(`borrarCard${mostrarGastosCreados.id}`)
                    cardProducto.remove()
                    //borrar del array
                    //encontramos objeto a eliminar
                    let productoEliminar = array.find((cuentas) => cuentas.id == mostrarGastosCreados.id)
                    //buscar indice
                    let posicion = array.indexOf(productoEliminar)
                    array.splice(posicion, 1)
                    //setear storage
                    localStorage.setItem("listaCuentas", JSON.stringify(array))
                    window.location.href = "gastos.html";
                }
            })
        })
    })
}
gastosCreados(listaCuentas);



/* Buscador */
function buscarInfo(buscado, array) {


    let busqueda = array.filter(
        (dato) => dato.cuenta.toLowerCase().includes(buscado.toLowerCase()) || dato.nombreCuenta.toLowerCase().includes(buscado.toLowerCase())
    )

    busqueda.length == 0 ?
        (resultadoBusqueda.innerHTML = `<h3>No hay coincidencias con la búsqueda: ${buscado}</h3>`,
            gastosCreados(busqueda)) :
        (resultadoBusqueda.innerHTML = "", gastosCreados(busqueda))
}

cajaGastos.addEventListener("input", () => {
    buscarInfo(cajaGastos.value, listaCuentas)
})

//Ordenar Gastos
let btnOrdenarGastos = document.getElementById("btn-ordenar-gastos");

function ordenarGastosMenorMayor(array) {
    const menorMayor = [].concat(array);
    menorMayor.sort((elem1, elem2) => elem1.valor - elem2.valor)
    gastosCreados(menorMayor);
};

function ordenarGastosMayorMenor(array) {
    const mayorMenor = [].concat(array);
    mayorMenor.sort((elem1, elem2) => elem2.valor - elem1.valor)
    gastosCreados(mayorMenor);
};

function ordenGastoAlfabetico(array) {
    const gastoAlfabetico = [].concat(array)
    gastoAlfabetico.sort((a, b) => {
        if (a.nombreCuenta > b.nombreCuenta) {
            return 1
        }
        if (a.nombreCuenta < b.nombreCuenta) {
            return -1
        }
        return 0
    });
    gastosCreados(gastoAlfabetico);
};

btnOrdenarGastos.addEventListener("change", () => {
    switch (btnOrdenarGastos.value) {
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


document.addEventListener("DOMContentLoaded", async () => {
    if (localStorage.getItem("listaIngresos")) {
        listaIngresos = JSON.parse(localStorage.getItem("listaIngresos"));
    } else {
        console.log("seteamos Lista de Ingresos");
        await cargarIngresos();
    }
    // Actualizar saldo ingresado y saldo final
    sumarIngresos = listaIngresos.reduce((total, ingreso) => total + ingreso.valorIngreso, 0);
    balanceIngresado = sumarIngresos;
    // Actualizar elementos del DOM con los valores
    saldoEnVivo.innerHTML = `$ ${balanceIngresado} USD`;
});








