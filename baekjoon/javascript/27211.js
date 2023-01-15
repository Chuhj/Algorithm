let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const map = input.slice(1, 1 + N).map((v) => v.split(' ').map(Number));

const dy = [0, 0, 1, -1];
const dx = [1, -1, 0, 0];
let answer = 0;

for (let y = 0; y < N; y++) {
  for (let x = 0; x < M; x++) {
    if (map[y][x] === 1) continue;
    answer += 1;
    bfs(y, x);
  }
}

console.log(answer);

function bfs(y, x) {
  const queue = [[y, x]];
  while (queue.length > 0) {
    const cur = queue.pop();

    for (let i = 0; i < 4; i++) {
      let [my, mx] = [cur[0] + dy[i], cur[1] + dx[i]];
      if (my < 0) my = N - 1;
      if (my >= N) my = 0;
      if (mx < 0) mx = M - 1;
      if (mx >= M) mx = 0;

      if (map[my][mx] === 0) {
        map[my][mx] = 1;
        queue.push([my, mx]);
      }
    }
  }
}
