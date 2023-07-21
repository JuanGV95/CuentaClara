//fecha
const hoy = new Date();
fechaActual.innerHTML = hoy.toDateString(); 
saldoEnVivo.innerHTML = `$ ${balanceIngresado} USD`;

function ingresosCreados(array) {
    boxIngreso.innerHTML = ``
    for (let mostrarIngresos of array) {
        let crearIngreso = document.createElement("section")
        crearIngreso.className = "cardIngreso"
        crearIngreso.innerHTML = ` 
        <div class="cardIconoIngreso">
        <img src="../assets/img/${mostrarIngresos.imagendeIngreso}"
        alt="Icono de alcancia">
        <a href="" id="borrarCardIngreso${mostrarIngresos.id}"><img src="../assets/img/trashIcon.svg" alt="icono para borrar"
        ></a></div>
<h2>${mostrarIngresos.cuentaIngreso}</h2>
<p>${mostrarIngresos.nombreIngreso} </p>
<h2 class="montoPagoIngreso">$ ${mostrarIngresos.valorIngreso} USD</h2>`
        boxIngreso.appendChild(crearIngreso);
    }
    array.forEach((mostrarIngresos) => {
        //manipular el DOM sin guardar en variable
        document.getElementById(`borrarCardIngreso${mostrarIngresos.id}`).addEventListener("click", () => {
           console.log(`Eliminar producto`)
           //borrar del DOM
           let cardProducto = document.getElementById(`borrarCardIngreso${mostrarIngresos.id}`)
           cardProducto.remove()
           //borrar del array
           //encontramos objeto a eliminar
           let productoEliminar = array.find((ingresos) => ingresos.id == mostrarIngresos.id)
           console.log(productoEliminar)
           //buscar indice
           let posicion = array.indexOf(productoEliminar)
           console.log(posicion)
           array.splice(posicion,1)
           console.log(array)
           //setear storage
           localStorage.setItem("listaIngresos", JSON.stringify(array))
        })
    
    })
}
ingresosCreados(listaIngresos);

/* Buscador */
function buscarInfoIngreso(buscado, array){

    
    let busqueda = array.filter(
       (dato) => 
       dato.cuentaIngreso.toLowerCase().includes(buscado.toLowerCase())  || dato.nombreIngreso.toLowerCase().includes(buscado.toLowerCase())
    )
  
    busqueda.length == 0 ?
    (resultadoBusquedaIngreso.innerHTML = `<h3>No hay coincidencias con la búsqueda ${buscado}</h3>`,
    ingresosCreados(busqueda)) :
    (resultadoBusquedaIngreso.innerHTML = "", ingresosCreados(busqueda))
  }

  cajaIngreso.addEventListener("input", () => {
    buscarInfoIngreso(cajaIngreso.value, listaIngresos)
 })


 //Ordenar 
  
 let btnOrdenarIngresos = document.getElementById("btn-ordenar-ingresos");
 function ordenarIngresoMenorMayor(array) {
    const menorMayor = [].concat(array);
    menorMayor.sort((elem1, elem2) => elem1.valorIngreso - elem2.valorIngreso)
    ingresosCreados(menorMayor);
};

function ordenarIngresoMayorMenor(array) {
    const mayorMenor = [].concat(array);
    mayorMenor.sort((elem1, elem2) => elem2.valorIngreso - elem1.valorIngreso)
    ingresosCreados(mayorMenor);
};

function ordenIngresoAlfabetico(array) {
    const arrayAlfabetico = [].concat(array)
    arrayAlfabetico.sort((a, b) => {
        if (a.nombreIngreso > b.nombreIngreso) {
            return 1
        }
        if (a.nombreIngreso < b.nombreIngreso) {
            return -1
        }
        return 0
    });
    ingresosCreados(arrayAlfabetico)
};

btnOrdenarIngresos.addEventListener("change", () =>{
    console.log(btnOrdenarIngresos.value)
    switch (btnOrdenarIngresos.value) {
        case "1":
            ordenarIngresoMenorMayor(listaIngresos);
            break
        case "2":
            ordenarIngresoMayorMenor(listaIngresos);
            break
        case "3":
            ordenIngresoAlfabetico(listaIngresos);
            break
        
        default:
            ingresosCreados(listaIngresos);
            break
    }
})
 