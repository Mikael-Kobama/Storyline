function gerarLabirinto(largura, altura) {
  let labirinto = Array(altura)
    .fill()
    .map(() => Array(largura).fill(1));
  let direcoes = [
    [0, 2],
    [2, 0],
    [0, -2],
    [-2, 0],
  ];
  let stack = [];

  function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function dentroDosLimites(x, y) {
    return x > 0 && x < altura - 1 && y > 0 && y < largura - 1;
  }

  function cavar(x, y) {
    labirinto[x][y] = 0;
    stack.push([x, y]);
    embaralhar(direcoes);

    for (let [dx, dy] of direcoes) {
      let nx = x + dx,
        ny = y + dy;
      let mx = x + dx / 2,
        my = y + dy / 2;
      if (dentroDosLimites(nx, ny) && labirinto[nx][ny] === 1) {
        labirinto[mx][my] = 0;
        cavar(nx, ny);
      }
    }
  }

  cavar(1, 1);
  return labirinto;
}

function imprimirLabirinto(labirinto) {
  console.log(
    labirinto
      .map((row) => row.map((cell) => (cell ? "█" : " ")).join(""))
      .join("\n")
  );
}

let lab = gerarLabirinto(21, 21);
imprimirLabirinto(lab);
