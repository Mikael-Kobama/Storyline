function buscaEMLargura(grafo, inicio) {
  let visitados = new Set()
  let fila = [inicio]
  let resultado  = []

  while(fila.length > 0) {
    let verticeAtual = fila.shift()
    if(!visitados.has(verticeAtual)) {
      visitados.add(verticeAtual)
      resultado.push(verticeAtual)

      for(let vizinho of grafo[verticeAtual]) {
        if(!visitados.has(vizinho)) {
          fila.push(vizinho)
        }
      }
    }
  }

  return resultado
} 

const grafo= {
  A: ['B', 'C'],
  B: ['A', 'D', 'E'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['B', 'F'],
  F: ['C', 'E']
}

const inicio = "A"
const resultado = buscaEMLargura(grafo, inicio)

console.log("Nós visitamos na ordem:", resultado)