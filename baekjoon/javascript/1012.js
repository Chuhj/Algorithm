const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString();
input = input.split('\n');

const dy = [0, 0, 1, -1];
const dx = [1, -1, 0, 0];

const T = Number(input[0]);
let index = 1;

for (let i = 0; i < T; i++) {
  let result = 0;
  let [M, N, K] = input[index].split(' ').map((v) => Number(v));
  let cabbages = input.slice(index + 1, index + K + 1).map((v) => v.split(' ').map((v) => Number(v)));
  const array = Array(N)
    .fill()
    .map(() => Array(M).fill(0));

  for (const [x, y] of cabbages) {
    array[y][x] = 1;
  }

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (dfs(y, x, array)) result += 1;
    }
  }

  console.log(result);

  function dfs(y, x) {
    // 맵 밖으로 가거나 0이면 return false
    if (y < 0 || x < 0 || y >= N || x >= M) return false;
    if (array[y][x] === 0) return false;
    array[y][x] = 0;

    for (let i = 0; i < 4; i++) {
      dfs(y + dy[i], x + dx[i]);
    }
    return true;
  }

  index += K + 1;
}
