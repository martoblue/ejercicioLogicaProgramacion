//No cambiar el nombre de la función ordenarNumeros
function ordenarNumeros(num1, num2, num3) {
  if (num1 === num2 && num1 === num3) {
    return 'Los números son iguales';
  } else {
    let numeros = [num1, num2, num3];
    numeros.sort(function (a, b) {
      return a - b;
    });

    let mayor = numeros[2];
    let centro = numeros[1];
    let menor = numeros[0];

    // No modificar el código debajo de esta línea
    return {
      mayor,
      centro,
      menor,
      ordenMayorAMenor: [mayor, centro, menor],
      ordenMenorAMayor: [menor, centro, mayor],
    };
  }
}
