let switchMensual = document.getElementById("flexSwitchCheckDefault");
let completarProcesoOcacional = document.getElementById("completar-proceso-ingreso-oc")
//funciones de inputs segun el tipo de Ingreso a crear
function ingresoOcacional (listaIngresos){
    if (switchMensual.checked){
        let tipoDeIngreso = "Mensual";
        let nombreIngresoOc = document.getElementById("nombre-ingreso-oc");
        let valorDeIngreso = document.getElementById("valor-ingreso-ocacional");
        nuevoIngreso = new Ingresos(listaIngresos.length + 1, tipoDeIngreso, nombreIngresoOc.value, Number(valorDeIngreso.value), "dollaricon.svg");

    } else { 
        let tipoDeIngreso = "1 Sola vez";
        let nombreIngresoOc = document.getElementById("nombre-ingreso-oc");
        let valorDeIngreso = document.getElementById("valor-ingreso-ocacional");
        nuevoIngreso = new Ingresos(listaIngresos.length + 1, tipoDeIngreso, nombreIngresoOc.value, Number(valorDeIngreso.value), "dollaricon.svg");
    }
    listaIngresos.push(nuevoIngreso);
    localStorage.setItem("listaIngresos", JSON.stringify(listaIngresos));
    
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'success',
        title: '¡Tu ingreso se ha agregado correctamente!'
      })
      setTimeout(()=>{
        window.location.href = "ingresos.html";
      },2000)
}
//boton para coompletar y activar lo anterior
completarProcesoOcacional.addEventListener("click", () => {
  //si ya esta el array en el local lo traemos para que no sobreEscriba el existente con la nueva
 listaIngresos = JSON.parse(localStorage.getItem("listaIngresos"));
    console.log(listaIngresos);
    ingresoOcacional(listaIngresos);
})

