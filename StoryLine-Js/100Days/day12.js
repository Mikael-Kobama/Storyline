function verificarBalanceamento(exp) {
  const pilha = [];
  const pares = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let i = 0; i < exp.length; i++) {
    const char = exp[i];
    // Se o caractere for um delimitador de abertura, empilhamos
    if (pares[char]) {
      pilha.push(char);
    }
    // Se for um delimitador de fechamento, verificamos se é correspondente
    else if (Object.values(pares).includes(char)) {
      if (pilha.length === 0 || char !== pares[pilha.pop()]) {
        return false;
      }
    }
  }

  // Se a pilha estiver vazia, todos os delimitadores foram balanceados
  return pilha.length === 0;
}
// Exemplos de uso:
console.log(verificarBalanceamento("(a + b) * {c + [d + (e)]}")); // true
console.log(verificarBalanceamento("{[a + b} * c]")); // false
console.log(verificarBalanceamento("((a + b) * c)")); // true
console.log(verificarBalanceamento("a + b * c")); // true
console.log(verificarBalanceamento("{[a + b] * (c + d)")); // fals
