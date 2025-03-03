function dijkstra(grafo, origem) {
  const distancias = {};
  const antecessores = {};
  const visitados = new Set();
  const prioridade = new Map();

  // Inicializa as distâncias e coloca todos os nós na fila de prioridade
  for (let vertice in grafo) {
    distancias[vertice] = Infinity;
    antecessores[vertice] = null;
    prioridade.set(vertice, distancias[vertice]);
  }

  distancias[origem] = 0;
  prioridade.set(origem, 0);

  while (prioridade.size > 0) {
    // Pega o vértice com a menor distância
    let [vertice, dist] = [...prioridade.entries()].reduce((min, p) =>
      p[1] < min[1] ? p : min
    );

    // Remove o vértice com a menor distância da fila de prioridade
    prioridade.delete(vertice);

    if (visitados.has(vertice)) continue;
    visitados.add(vertice);

    // Atualiza as distâncias dos vizinhos
    for (let vizinho in grafo[vertice]) {
      const novaDistancia = dist + grafo[vertice][vizinho];
      if (novaDistancia < distancias[vizinho]) {
        distancias[vizinho] = novaDistancia;
        antecessores[vizinho] = vertice;

        // Atualiza a fila de prioridade
        prioridade.set(vizinho, distancias[vizinho]);
      }
    }
  }

  return { distancias, antecessores };
}

const grafo = {
  A: { B: 4, C: 2 },
  B: { A: 4, C: 5, D: 10 },
  C: { A: 2, B: 5, D: 3, E: 7 },
  D: { B: 10, C: 3, E: 4 },
  E: { C: 7, D: 4 },
};

const origem = "A";
const resultado = dijkstra(grafo, origem);

console.log("Distâncias:", resultado.distancias);
console.log("Antecessores:", resultado.antecessores);
