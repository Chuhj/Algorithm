function solution(m, n, puddles) {
  const map = Array(n)
    .fill(undefined)
    .map(() => Array(m).fill(0));

  puddles.forEach((puddle) => {
    map[puddle[1] - 1][puddle[0] - 1] = -1;
  });

  map[0][0] = 1;
  for (let x = 0; x < m; x++) {
    if (map[0][x] === -1) break;
    map[0][x] = 1;
  }

  for (let y = 0; y < n; y++) {
    if (map[y][0] === -1) break;
    map[y][0] = 1;
  }

  for (let y = 1; y < n; y++) {
    for (let x = 1; x < m; x++) {
      if (map[y][x] === -1) continue;
      if (map[y - 1][x] === -1 && map[y][x - 1] === -1) continue;

      if (map[y - 1][x] === -1 && map[y][x - 1] !== -1) {
        map[y][x] = map[y][x - 1];
      } else if (map[y][x - 1] === -1 && map[y - 1][x] !== -1) {
        map[y][x] = map[y - 1][x];
      } else {
        map[y][x] = map[y - 1][x] + (map[y][x - 1] % 1_000_000_007);
      }
    }
  }

  return map[n - 1][m - 1] % 1_000_000_007;
}
