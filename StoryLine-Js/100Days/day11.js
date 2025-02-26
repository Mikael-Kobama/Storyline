// Função para contar a frequência de palavras em uma string
function contarFrequenciaPalavras(texto) {
  // Remove pontuações e transforma tudo em minúsculo
  const textoLimpo = texto.replace(/[^\w\s]/g, "").toLowerCase();
  // Divide o texto em um array de palavras
  const palavras = textoLimpo.split(/\s+/);
  // Objeto para armazenar as contagens
  const frequencia = {};
  // Conta a frequência de cada palavra
  for (let i = 0; i < palavras.length; i++) {
    const palavra = palavras[i];
    if (frequencia[palavra]) {
      frequencia[palavra]++;
    } else {
      frequencia[palavra] = 1;
    }
  }

  return frequencia;
}

// Exemplo de uso
const texto =
  "JavaScript é uma linguagem poderosa. JavaScript é muito popular.";
const resultado = contarFrequenciaPalavras(texto);

// Exibe os resultados
console.log(resultado);
