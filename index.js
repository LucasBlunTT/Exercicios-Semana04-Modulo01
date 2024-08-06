console.log('Script funcionando!');

function calculateSum() {
  const number1 = parseFloat(document.getElementById('number1').value);
  const number2 = parseFloat(document.getElementById('number2').value);

  if (isNaN(number1) || isNaN(number2)) {
    document.getElementById('result').innerText =
      'Por favor, insira números válidos.';
    return;
  }

  const sum = number1 + number2;
  document.getElementById('result').innerText = 'Resultado: ' + sum;
}
