const hoy = new Date();
fechaActual.innerHTML = hoy.toDateString();

const cargarCuentas = async () => {
  const r = await fetch("./js/json/cuentas.json");
  const d = await r.json();

  for (let cuenta of d) {
    let nuevaCuenta = new Cuentas(
      cuenta.id,
      cuenta.cuenta,
      cuenta.nombreCuenta,
      cuenta.cuotas,
      cuenta.valor,
      cuenta.interes,
      cuenta.imagen
    );
    listaCuentas.push(nuevaCuenta);
  }
  localStorage.setItem("listaCuentas", JSON.stringify(listaCuentas));
  mostrarGestionDom(d);
 
  saldoFinal = balanceIngresado - pronosticoFinDe;

};

//segunda carga
const cargarIngresos = async () => {
  const a = await fetch("./js/json/ingresos.json");
  const b = await a.json();

  for (let ingreso of b) {
    let nuevoIngreso = new Ingresos(
      ingreso.id,
      ingreso.cuentaIngreso,
      ingreso.nombreIngreso,
      ingreso.valorIngreso,
      ingreso.imagendeIngreso
    );
    listaIngresos.push(nuevoIngreso);
  }
  localStorage.setItem("listaIngresos", JSON.stringify(listaIngresos));
  for (let losIngresos of listaIngresos) {
    sumarIngresos += losIngresos.valorIngreso;
  }
// Actualizar saldo ingresado después de cargar los ingresos
  balanceIngresado = sumarIngresos;

  // Actualizar saldo final después de cargar los ingresos
  saldoFinal = balanceIngresado - pronosticoFinDe;

  
};

function mostrarGestionDom(array) {
  gestionDeGastos.innerHTML = ``;
  for (let nuevaCuenta of array) {
    let gestionPendiente = document.createElement("article");
    gestionPendiente.className = "gestionCuentas";
    gestionPendiente.innerHTML = `
        <img src="assets/img/${nuevaCuenta.imagen}" alt="un cerdito de ahorro">
    <div>
        <h2>${nuevaCuenta.nombreCuenta}</h2>
        <p>${nuevaCuenta.cuenta}</p>
    </div>
    <p>$ ${valorCuotas(nuevaCuenta)} USD</p>
    <div id="cuadroPendiente">
        <p>Pendiente</p>
    </div>
    <button id="btnGestionar">Gestionar</button>`;
    gestionDeGastos.appendChild(gestionPendiente);
  }
}


// Evento que se ejecuta cuando el DOM ha sido completamente cargado
document.addEventListener("DOMContentLoaded", async () => {
    // Cargar las cuentas y los ingresos
    if (localStorage.getItem("listaCuentas")) {
      listaCuentas = JSON.parse(localStorage.getItem("listaCuentas"));
    } else {
      console.log("seteamos el Array listaCuentas");
      await cargarCuentas();
    }
  
    if (localStorage.getItem("listaIngresos")) {
      listaIngresos = JSON.parse(localStorage.getItem("listaIngresos"));
    } else {
      console.log("seteamos Lista de Ingresos");
      await cargarIngresos();
    }
  
    // Mostrar la gestión de cuentas en el DOM después de cargar todos los datos
    mostrarGestionDom(listaCuentas);
  
    // Actualizar saldo ingresado y saldo final
    sumarIngresos = listaIngresos.reduce((total, ingreso) => total + ingreso.valorIngreso, 0);
    balanceIngresado = sumarIngresos;
    saldoFinal = balanceIngresado - pronosticoFinDe;
   // Calcular total de gastos después de cargar las cuentas
   for (let losGastos of listaCuentas) {
    let totalGastosCuota = valorCuotas(losGastos);
    sumarGastos += Number(totalGastosCuota);
  }
  for (let pronostico of listaCuentas) {
    let totalCuota = valorCuotas(pronostico);
    pronosticoFinDe += Number(totalCuota);
  }
    // Actualizar elementos del DOM con los valores correspondientes
    saldoEnVivo.innerHTML = `$ ${balanceIngresado} USD`;
    saldoActual.innerHTML = `$ ${balanceIngresado} USD`;
    dineroQueIngresa.innerHTML = `$${balanceIngresado} USD`;
    gastosTotal.innerHTML = `$ ${sumarGastos} USD`;
    totalAlFinal.innerHTML = `$ ${saldoFinal} USD`;
  });




//buscador
function buscarInfoIndex(buscado, array) {
  let busqueda = array.filter(
    (dato) =>
      dato.cuenta.toLowerCase().includes(buscado.toLowerCase()) ||
      dato.nombreCuenta.toLowerCase().includes(buscado.toLowerCase())
  );

  busqueda.length == 0
    ? ((resultadoBusquedaIndex.innerHTML = `<h3>No hay coincidencias con la búsqueda ${buscado}</h3>`),
      mostrarGestionDom(busqueda))
    : ((resultadoBusquedaIndex.innerHTML = ""), mostrarGestionDom(busqueda));
}

cajaIndex.addEventListener("input", () => {
  buscarInfoIndex(cajaIndex.value, listaCuentas);
});

//Ordenador

let btnOrdenarGastosIndex = document.getElementById("ordenGastoIndex");

function ordenarGastosMenorMayor(array) {
  const menorMayor = [].concat(array);
  menorMayor.sort((elem1, elem2) => elem1.valor - elem2.valor);
  mostrarGestionDom(menorMayor);
}

function ordenarGastosMayorMenor(array) {
  const mayorMenor = [].concat(array);
  mayorMenor.sort((elem1, elem2) => elem2.valor - elem1.valor);
  mostrarGestionDom(mayorMenor);
}

function ordenGastoAlfabetico(array) {
  const gastoAlfabetico = [].concat(array);
  gastoAlfabetico.sort((a, b) => {
    if (a.nombreCuenta > b.nombreCuenta) {
      return 1;
    }
    if (a.nombreCuenta < b.nombreCuenta) {
      return -1;
    }
    return 0;
  });
  mostrarGestionDom(gastoAlfabetico);
}

btnOrdenarGastosIndex.addEventListener("change", () => {
  switch (btnOrdenarGastosIndex.value) {
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
});
