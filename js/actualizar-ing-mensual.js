
function baseMensual(listaIngresos) {
    let valorIng = document.getElementById("nombre-ingreso-oc");
    sumarIngresos = valorIng + sumarIngresos;
    const nuevoIngreso = new Ingresos(listaIngresos.length > 0 ? listaIngresos[0].id : 1, "Sueldo Fijo", "mensual", Number(valorIng.value), "officeBagIcon.svg");
  //modificamos la Actualizacion de ingreso ya que queremos que sea siempre el primer item del array (si se elimina se pierde el puesto)
    if (listaIngresos.length > 0) {
        listaIngresos[0] = nuevoIngreso;
    } else {
        listaIngresos.push(nuevoIngreso);
    }
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
      title: '¡Tu sueldo se ha actualizado correctamente!'
    })
    setTimeout(()=>{
      window.location.href = "ingresos.html";
    },2000)
}

actualizarSueldoFijo.addEventListener("click", () => {
    listaIngresos = JSON.parse(localStorage.getItem("listaIngresos"));
    baseMensual(listaIngresos);
});