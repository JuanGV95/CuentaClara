function credito(listaCuentas) {
    let cuentaTipo = "Crédito";
    let nombrarCuentaCredito = document.getElementById("nombre-de-credito");
    let cuotasPagoCredito = document.getElementById("cuotas-de-credito");
    let valorCuentaCredito = document.getElementById("valor-de-credito");
    let tasaInteresCredito = document.getElementById("tasa-interes-credito")
    const nuevaCuenta = new Cuentas(listaCuentas.length + 1, cuentaTipo, nombrarCuentaCredito.value, cuotasPagoCredito.value, valorCuentaCredito.value, tasaInteresCredito.value, "creditIcon.svg");
    
    //pusheamos al array:
    listaCuentas.push(nuevaCuenta);
  
    localStorage.setItem("listaCuentas", JSON.stringify(listaCuentas))
    window.location.href = "gastos.html";

}



// Eventos 
btnAgregarMetaCredito.addEventListener("click", () => {
    console.log(listaCuentas)
    credito(listaCuentas);
    
});


