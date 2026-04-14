let form = document.getElementById('pedidoForm');
let resultado = document.getElementById('resultado');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let basico = Number(document.getElementById('basico').value) || 0;
    let duplo = Number(document.getElementById('duplo').value) || 0;
    let xsalada = Number(document.getElementById('xsalada').value) || 0;
    let ref350 = Number(document.getElementById('ref350').value) || 0;
    let ref1l = Number(document.getElementById('ref1l').value) || 0;

    let total = basico * 22 + duplo * 26 + xsalada * 29 + ref350 * 5 + ref1l * 8;

    resultado.textContent = 'Total: R$ ' + total.toFixed(2);
});