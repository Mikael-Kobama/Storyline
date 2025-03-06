function fibonacciComLista(num) {
  if (num < 0) return "Número inválido";

  let sequencia = [0, 1];
  let i = 2;

  while (i <= num) {
    let proximo = sequencia[i - 1] + sequencia[i - 2];
    sequencia.push(proximo);
    i++;
  }
  return {
    numeroFibonacci: sequencia[num],
    sequenciaCompleta: sequencia,
  };
}

console.log(fibonacciComLista(6)); // Saída: 8
console.log(fibonacciComLista(10)); // Saída: 55
