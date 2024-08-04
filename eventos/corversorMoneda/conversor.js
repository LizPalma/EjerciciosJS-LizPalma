
function convertir() {
    let cantidad = parseFloat(document.getElementById("valor").value);
    let resultado = 0;
    let dolar = 1300;
    let peso = 1300;
    if (document.getElementById("dolar").checked) {
        resultado = cantidad * dolar
        return document.getElementById("cambio").innerHTML = resultado;
    }else if (document.getElementById("peso").checked) {
        resultado = cantidad / peso;
        return document.getElementById("cambio").innerHTML = resultado;
    } else {
        
        alert("complete los campos requeridos")
    }


}
