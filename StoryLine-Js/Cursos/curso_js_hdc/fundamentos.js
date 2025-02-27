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
for (let i = 0; i < 10; i++) {
  console.log("o valor de i é: " + i);
}

// while
let k = 0;
while (k < 5) {
  console.log("o valor de k é: " + k);
  k++;
}
