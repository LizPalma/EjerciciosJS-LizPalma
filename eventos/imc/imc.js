
//Me Posiciono en los ID a de info
function calcularIMC() {
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;

// creo la condiocional para crear el calculo 
if (peso !== '' && altura !== '') {
    //calculo para obtener el imc
    let bmi = peso / ((altura / 100) **2);
    //indico donde lo va a imprimir 
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = 'Tu IMC es: ' + bmi.toFixed(2);
    //(toFixed)para redondear el valor a dos decimales.
}
}