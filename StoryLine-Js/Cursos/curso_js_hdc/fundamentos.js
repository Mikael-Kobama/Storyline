// Fundamentos

//var nome = "valor"

var minhaVariavel = "Olá Mundo";
console.log(minhaVariavel);

//Comentarios

//

/*
tudo
é
um
comentario
*/

//variaveis  e tipos de dados

var meuNumero = 10;

console.log(meuNumero);
console.log(meuNumero + 5);
console.log("10" + 5);

console.log(typeof meuNumero);

var booleando = true;

console.log(typeof booleando);

var meuObjeto = {};
var meuArray = [];
var meuNull = null;
var meuUndefined = undefined;

console.log(typeof meuObjeto);
console.log(typeof meuArray);
console.log(typeof meuNull);
console.log(typeof meuUndefined);

//let e const
// novas formas de declarar variaveis

let x = 10;
const y = 5;

console.log(typeof x);

console.log(x, y);

//operadores

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);

// operadores para comparar

console.log(x == y);
console.log(x != y);

console.log("5" == 5);
console.log("5" === 5);
console.log("5" !== 5);

// operadores de logica
// AND &&
// OR ||

console.log(10 > 5 && 20 > 5);
console.log(10 > 5 && 20 < 5);

console.log(10 > 5 || 20 > 5);
console.log(10 > 5 || 20 < 5);
console.log(10 < 5 || 20 < 5);

// Convergindo tipos
const meuNumero2 = "123";

const meuNumeroConvetido = Number(meuNumero2);

console.log(meuNumeroConvetido);
console.log(typeof meuNumeroConvetido);

// estrutura para condicionar - if, else, else if

const idade = 20;

if (idade < 13) {
  console.log(" a idade é de Criança");
} else if (idade < 16) {
  console.log("Adolescente");
} else {
  console.log("Adulto");
}

//Switch

const fruta = "banana";

switch (fruta) {
  case "kiwi":
    console.log("kiwi");
    break;
  case "abacate":
    console.log("abacate");
    break;
  default:
    console.log("frutas erradas");
}

//estruturas que se repetem

//contadort, limite condisionado, incremento
// for (let i = 0; i < 10; i++) {
//   console.log("o valor de i é: " + i);
// }

// // while
// let k = 0;
// while (k < 5) {
//   console.log("o valor de k é: " + k);
//   k++;
// }

// // do while
// let j = 0;

// do {
//   console.log("o valor de j é: " + j);
//   j++;
// } while (j < 5);

// Funçoes
// function nome(arg1, arg2) { corpo}

function cumprimentar(nome) {
  console.log("olá " + nome);
}

//invocar = nome()
cumprimentar("Mikael");

// escopo de variaveis
let cor = "azul";

function mostraCor() {
  let cor = "verde";

  console.log(cor);
}

console.log(cor);

mostraCor();

//hoisting = içamento

testeHoisting();
function testeHoisting() {
  console.log("olá");
}

// arrow function
const testeArrow = () => console.log("isso é uma arrow function");

testeArrow();

// truthy e falsy

const minhaVariavel1 = ""; //falsy
const minhaVariavel2 = "algum texto";

if (minhaVariavel1) {
  console.log("true");
} else {
  console.log("falso");
}

if (minhaVariavel2) {
  console.log("true");
} else {
  console.log("falso");
}

// arry, listas

const numeros = [1, 2, 3, 4, 5, 6];

console.log(numeros);
console.log(numeros[2]);

numeros.push(7);

console.log(numeros);

//prototype => Objeto -> objeto2
// array => nossos arrays
numeros.pop();
console.log(numeros);

//strings

const minhaStringNova = "oi mundinho";

// contatenar
const minhaString3 = minhaStringNova + ", como voce esta?";
console.log(minhaString3);

// interpolando

const minhaString4 = `${minhaStringNova}, Como você está?`;
console.log(minhaString4);

console.log(minhaString3.length);
console.log(minhaString3[5]);
console.log(minhaString4.toUpperCase);

//Data e hora
const agora = Date();
console.log(agora);

const natal = new Date(2023, 11, 25);
console.log(natal);

//Math

console.log(Math.PI);

console.log(Math.round(3.46567));

console.log(Math.sqrt(16));
console.log(Math.pow(2, 3));
