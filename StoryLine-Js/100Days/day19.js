function processarNumeros(arr, limite) {
  return arr
    .filter((num) => num > limite) // Filtra os números maiores que "limite"
    .map((num) => ({ original: num, dobrado: num * 2 })); // Transforma em um objeto
}

const numeros = [5, 12, 8, 130, 44];
const resultado = processarNumeros(numeros, 10);

console.log(resultado);
// [
//   { original: 12, dobrado: 24 },
//   { original: 130, dobrado: 260 },
//   { original: 44, dobrado: 88 }
// ]
