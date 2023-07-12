



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
    array.forEach((mostrarGastosCreados) => {
        //manipular el DOM sin guardar en variable
        document.getElementById(`borrarCard${mostrarGastosCreados.id}`).addEventListener("click", () => {
           console.log(`Eliminar producto`)
           //borrar del DOM
           let cardProducto = document.getElementById(`borrarCard${mostrarGastosCreados.id}`)
           cardProducto.remove()
           //borrar del array
           //encontramos objeto a eliminar
           let productoEliminar = array.find((cuentas) => cuentas.id == mostrarGastosCreados.id)
           console.log(productoEliminar)
           //buscar indice
           let posicion = array.indexOf(productoEliminar)
           console.log(posicion)
           array.splice(posicion,1)
           console.log(array)
           //setear storage
           localStorage.setItem("listaCuentas", JSON.stringify(array))
        })
    
    })
}

gastosCreados(listaCuentas);



/* Buscador */
function buscarInfo(buscado, array){

    
    let busqueda = array.filter(
       (dato) => dato.cuenta.toLowerCase().includes(buscado.toLowerCase())  || dato.nombreCuenta.toLowerCase().includes(buscado.toLowerCase())
    )
  
    busqueda.length == 0 ?
    (resultadoBusqueda.innerHTML = `<h3>No hay coincidencias con la búsqueda ${buscado}</h3>`,
    gastosCreados(busqueda)) :
    (resultadoBusqueda.innerHTML = "", gastosCreados(busqueda))
  }

  cajaGastos.addEventListener("input", () => {
    buscarInfo(cajaGastos.value, listaCuentas)
 })

 //Botoncito para eliminar (construccion)
 

 function cargarProductosCarrito(array){
    modalBodyCarrito.innerHTML = ``
    //primer for each imprime las card
    array.forEach((productoCarrito)=>{
       modalBodyCarrito.innerHTML += `
 
         <div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.id}" style="max-width: 540px;">
                  <img class="card-img-top" height="300px" src="assets/${productoCarrito.imagen}" alt="">
                  <div class="card-body">
                         <h4 class="card-title">${productoCarrito.titulo}</h4>
                         <p class="card-text">${productoCarrito.autor}</p>
                          <p class="card-text">$${productoCarrito.precio}</p>
                          <button class= "btn btn-danger" id="botonEliminar${productoCarrito.id}"><i class="fas fa-trash-alt"></i></button>
                  </div>
             </div>
 
    `
    })
    //segundo for each adjunta evento eliminar
    array.forEach((productoCarrito) => {
       //manipular el DOM sin guardar en variable
       document.getElementById(`botonEliminar${productoCarrito.id}`).addEventListener("click", () => {
          console.log(`Eliminar producto`)
          //borrar del DOM
          let cardProducto = document.getElementById(`productoCarrito${productoCarrito.id}`)
          cardProducto.remove()
          //borrar del array
          //encontramos objeto a eliminar
          let productoEliminar = array.find((libro) => libro.id == productoCarrito.id)
          console.log(productoEliminar)
          //buscar indice
          let posicion = array.indexOf(productoEliminar)
          console.log(posicion)
          array.splice(posicion,1)
          console.log(array)
          //setear storage
          localStorage.setItem("carrito", JSON.stringify(array))
 
          //debemos calcularTotal??
          calcularTotal(array)
       })
    })
    calcularTotal(array)
 
 }







