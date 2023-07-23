function credito(listaCuentas) {
    let cuentaTipo = "Crédito";
    let nombrarCuentaCredito = document.getElementById("nombre-de-credito");
    let cuotasPagoCredito = document.getElementById("cuotas-de-credito");
    let valorCuentaCredito = document.getElementById("valor-de-credito");
    let tasaInteresCredito = document.getElementById("tasa-interes-credito");
   
    const nuevaCuenta = new Cuentas(listaCuentas.length + 1, cuentaTipo, nombrarCuentaCredito.value, cuotasPagoCredito.value, valorCuentaCredito.value, tasaInteresCredito.value, "creditIcon.svg");
    
    //pusheamos al array:
    listaCuentas.push(nuevaCuenta);
    localStorage.setItem("listaCuentas", JSON.stringify(listaCuentas))
    
    //SweetAlert ;D
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
    title: '¡Tu crédito se ha agregado correctamente!'
  })
  setTimeout(()=>{
    window.location.href = "gastos.html";
  },2000)
}



// Eventos 
btnAgregarMetaCredito.addEventListener("click", () => {
    listaCuentas = JSON.parse(localStorage.getItem("listaCuentas"));
    console.log(listaCuentas)
    credito(listaCuentas);
    
});


