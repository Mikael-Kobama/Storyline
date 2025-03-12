function ehNumeroDeArstrong(num) {
  let strNum = num.toString();
  let numDigitos = strNum.length;

  let soma = strNum
    .split("")
    .reduce((acc, digito) => acc + Math.pow(Number(digito), numDigitos), 0);

  return soma === num;
}

function encontrarNumerosDeArmstrongclear(limite) {
  let numeros = [];
  for (let i = 1; i <= limite; i++) {
    if (ehNumeroDeArstrong(i)) {
      numeros.push(i);
    }
  }
  return numeros;
}

console.log(encontrarNumerosDeArmstrong(10000));
