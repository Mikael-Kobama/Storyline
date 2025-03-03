// Exercicios de fundamentos
//Exercicios 1: olá mundo!
//crie um script que impra olá mundo!

console.log("olá mundo");

// Exercicio 2: converter tipos

const valorString = "1234";
console.log(typeof Number(valorString));

//Exercicios 3: Manipulando strings

const stringValor = "Js é incrivel";

const numeroDeCaracteres = stringValor.length;
const numeroDePalavras = stringValor.split(" ").length;

console.log(numeroDeCaracteres);
console.log(numeroDePalavras);

// function contarPalavra(str) {
//   const palavras = str.trim().split(/\s+/);
//   return palavras.length > 0 && palavras[0] !== "" ? palavras.length : 0;
// }

// function contarletras(str) {
//   const letras = str.replace(/[^a-zA-Zá-ÿÁ-Ÿ]/g, "");
//   return letras.length;
// }

// console.log(contarletras(stringValor));
// console.log(contarPalavra(stringValor));

// exer 4 : loops e arrays

const names = ["julia", "alex", "gil", "matheus", "alan"];

for (i = 0; i < names.length; i++) {
  console.log(`o nome da fera é ${names[i]}`);
}

//exercicio 5 string e horarios

function converterHorario(horario24) {
  // 14:30 => hora =14, min = 20 => split()
  // const hora = horario24.split(":")[0];
  // const minuto = horario24.split(":")[1];

  const [hora, minuto] = horario24.split(":");
  const hora12 = hora % 12 || 12;

  let perido = "AM";
  if (hora > 12) {
    perido = "PM";
  }

  console.log(`${hora12}:${minuto} ${perido}`);
}

converterHorario("14:20");
