function crivoEratostenas(limite) {
  let primos = Array(limite + 1).fill(true)
  primos[0] = primos[1] = false

  for(let i = 2; i * i <= limite; i++) {
    if(primos[i]) {
      for(let j = i * i; j <= limite; j += i) {
        primos[j] = false
      }
    }
  }

  return primos.map((ehPrimo, index) => (ehPrimo ? index : null)).filter((num) => num !== null)
}


console.log(crivoEratostenas(100))