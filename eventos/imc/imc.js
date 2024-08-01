function calcularIMC() {
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;


if (peso !== '' && altura !== '') {
    let bmi = peso / ((altura / 100) **2);
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = 'Tu IMC es: ' + bmi.toFixed(2);
}
}