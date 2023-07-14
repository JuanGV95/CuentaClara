let checkCuotas = document.getElementById("flexSwitchCheckDefault");
let divCheckCuotas = document.getElementById("seccion-btn-tres-true");
let checkBoxDefUno = document.getElementById("flexSwitchCheckDisabled")
let checkBoxDefDos = document.getElementById("flexSwitchCheckChecked")
checkCuotas.addEventListener ("click", function ()  {
    if(checkCuotas.checked){
        divCheckCuotas.style.display = "block";
          
    } else {
        divCheckCuotas.style.display = "none";
    }
});


function otrasCuentas(listaCuentas) {
    let cuentaTipoOtro = "Crédito";
    let nombrarCuentaOtro = document.getElementById("nombre-de-otro");
    let cuotasPagoOtro = document.getElementById("cuota-de-otro-tres");
    let valorCuentaOtro = document.getElementById("cuotas-de-otro");
    let tasaInteresOtro = document.getElementById("tasa-de-otro")
    const nuevaCuenta = new Cuentas(listaCuentas.length + 1, cuentaTipoOtro, nombrarCuentaOtro.value, cuotasPagoOtro.value, valorCuentaOtro.value, tasaInteresOtro.value, "creditIcon.svg");
    
    //pusheamos al array:
    listaCuentas.push(nuevaCuenta);
  
    localStorage.setItem("listaCuentas", JSON.stringify(listaCuentas))
    window.location.href = "gastos.html";

}

// Eventos 
btnAgregarOtro.addEventListener("click", () => {
    console.log(listaCuentas)
    otrasCuentas(listaCuentas);
    
});


