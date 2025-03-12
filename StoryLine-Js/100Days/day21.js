function ehPrimo(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function somaPrimos(limite) {
  return Array.from({ length: limite - 1 }, (_, i) => i + 2)
    .filter(ehPrimo)
    .reduce((acc, num) => acc + num, 0);
}

console.log(somaPrimos(10));
console.log(somaPrimos(20));
console.log(somaPrimos(30));
