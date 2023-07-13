
function baseMensual(listaIngresos) {
    let valorIng = document.getElementById("nombre-ingreso-oc");
    sumarIngresos = valorIng + sumarIngresos;
    const nuevoIngreso = new Ingresos(listaIngresos.length > 0 ? listaIngresos[0].id : 1, "Sueldo Fijo", "mensual", Number(valorIng.value), "officeBagIcon.svg");

    if (listaIngresos.length > 0) {
        listaIngresos[0] = nuevoIngreso;
    } else {
        listaIngresos.push(nuevoIngreso);
    }
    
    localStorage.setItem("listaIngresos", JSON.stringify(listaIngresos));
    window.location.href = "ingresos.html";
}

actualizarSueldoFijo.addEventListener("click", () => {
    baseMensual(listaIngresos);
});