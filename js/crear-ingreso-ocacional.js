let switchMensual = document.getElementById("flexSwitchCheckDefault");
let completarProcesoOcacional = document.getElementById("completar-proceso-ingreso-oc")
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

    window.location.href = "ingresos.html"; 
}

completarProcesoOcacional.addEventListener("click", () => {
 listaIngresos = JSON.parse(localStorage.getItem("listaIngresos"));
    console.log(listaIngresos);
    ingresoOcacional(listaIngresos);
})

