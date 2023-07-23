//en esta seccion se crea y selecciona cada cuenta segun la necesidad 
//esta super machetero pero me esforce por hacerlo funcionar con mis conocimientos

let checkCuotas = document.getElementById("flexSwitchCheckDefault");
let divCheckCuotas = document.getElementById("seccion-btn-tres-true");
let divMensualOtro = document.getElementById("checkbox-mensual-otro");
let checkBoxDefUno = document.getElementById("flexSwitchCheckDisabled");
let checkBoxDefDos = document.getElementById("flexSwitchCheckChecked");
//la funcion de los 3 siguientes if es para hacer dinamicos los botones
// del switch en la pagina de crear otros gastos
checkCuotas.addEventListener("click", function () {
  if (checkCuotas.checked) {
    divCheckCuotas.style.display = "block";
    divMensualOtro.style.display = "block";
    checkBoxDefUno.checked = false;
    checkBoxDefDos.checked = false;

  } else {
    divCheckCuotas.style.display = "none";
    divCheckCuotas.checked = false;
    checkBoxDefDos.checked = false;
  }
});

checkBoxDefUno.addEventListener("click", function () {
  if (checkBoxDefUno.checked) {
    divCheckCuotas.style.display = "none";
    checkCuotas.checked = false;
    checkBoxDefDos.checked = false;
  } else {
    checkBoxDefDos.checked = false;
    checkBoxDefUno.checked = false;
  }
});

checkBoxDefDos.addEventListener("click", function () {
  if (checkBoxDefDos.checked) {
    divMensualOtro.style.display = "none"
    divCheckCuotas.style.display = "block";
    checkCuotas.checked = false;
    checkBoxDefUno.checked = false;
  } else {
    divCheckCuotas.style.display = "none";
    checkCuotas.checked = false;
    checkBoxDefDos.checked = false;
    checkBoxDefUno.checked = false;
  }
});

//aqui los llamo nuevamente para que segun cual este activo, me guarde
//la cuenta segun la necesidad 
function otrasCuentas(listaCuentas) {
  if (checkCuotas.checked) {
    let cuentaTipoOtro = "Otro";
    let nombrarCuentaOtro = document.getElementById("nombre-de-otro");
    let cuotasPagoOtro = document.getElementById("cuota-de-otro-tres");
    let valorCuentaOtro = document.getElementById("cuotas-de-otro");
    let tasaInteresOtro = document.getElementById("tasa-de-otro");

    nuevaCuenta = new Cuentas(
      listaCuentas.length + 1,
      cuentaTipoOtro,
      nombrarCuentaOtro.value,
      cuotasPagoOtro.value,
      valorCuentaOtro.value,
      tasaInteresOtro.value,
      "dotsIcon.svg"
    );
  } else if (checkBoxDefUno.checked) {
    let cuentaTipoOtro = "Otro";
    let nombrarCuentaOtro = document.getElementById("nombre-de-otro");
    let cuotasPagoOtro = 1;
    let valorCuentaOtro = document.getElementById("cuotas-de-otro");
    let tasaInteresOtro = 0;
    nuevaCuenta = new Cuentas(
      listaCuentas.length + 1,
      cuentaTipoOtro,
      nombrarCuentaOtro.value,
      cuotasPagoOtro,
      valorCuentaOtro.value,
      tasaInteresOtro,
      "dotsIcon.svg"
    );
  } else {
    let cuentaTipoOtro = "Otro";
    let nombrarCuentaOtro = document.getElementById("nombre-de-otro");
    let cuotasPagoOtro = document.getElementById("cuota-de-otro-tres");
    let valorCuentaOtro = document.getElementById("cuotas-de-otro");
    let tasaInteresOtro = 0;
    nuevaCuenta = new Cuentas(
      listaCuentas.length + 1,
      cuentaTipoOtro,
      nombrarCuentaOtro.value,
      cuotasPagoOtro.value,
      valorCuentaOtro.value,
      tasaInteresOtro,
      "dotsIcon.svg"
    );
  }
  //pusheamos al array:
  listaCuentas.push(nuevaCuenta);

  localStorage.setItem("listaCuentas", JSON.stringify(listaCuentas));
  window.location.href = "gastos.html";
}

// y por ultimo el boton para agregar nuestra nueva cuenta maravilloso :D
btnAgregarOtro.addEventListener("click", () => {
  listaCuentas = JSON.parse(localStorage.getItem("listaCuentas"))
  console.log(listaCuentas);
  otrasCuentas(listaCuentas);
});