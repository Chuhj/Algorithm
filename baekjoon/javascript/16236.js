const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);

let sharkY = 0;
let sharkX = 0;

const map = input.slice(1).map((v, row) =>
  v.split(' ').map((char, col) => {
    if (char === '9') {
      sharkY = row;
      sharkX = col;
      return 0;
    }
    return Number(char);
  })
);

let distances = Array(n)
  .fill()
  .map(() => Array(n).fill(-1));

const MAX = 20;
const MAX_DISTANCE = 401;

const dy = [-1, 0, 0, 1];
const dx = [0, -1, 1, 0];

let sharkSize = 2;
let eatNum = 0;
let totalDistance = 0;

while (true) {
  distances[sharkY][sharkX] = 0;
  const [minY, minX, minDistance] = bfs(distances); // bfs로 제일 가까운 먹이의 위치, 거리를 찾음.

  if (minY === MAX) break; // 먹이를 못찾으면 중단

  map[minY][minX] = 0; // 먹이를 먹은곳은 0
  [sharkY, sharkX] = [minY, minX]; // 상어 위치 이동
  totalDistance += minDistance; // 총 거리에 이동거리 더함.

  // 먹이를 먹었을 때 처리
  eatNum += 1;
  if (sharkSize === eatNum) {
    sharkSize += 1;
    eatNum = 0;
  }

  distances = distances.map((row) => row.map(() => -1));
}

console.log(totalDistance);

function bfs(distances) {
  let minY = MAX;
  let minX = MAX;
  let minDistance = MAX_DISTANCE;

  const queue = [[sharkY, sharkX]];

  while (queue.length > 0) {
    const [y, x] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const [my, mx] = [y + dy[i], x + dx[i]];
      if (my < 0 || mx < 0 || my >= n || mx >= n) continue;
      if (map[my][mx] > sharkSize || distances[my][mx] !== -1) continue; // 먹이를 못먹거나 방문했으면 스킵
      // 상어의 크기보다 먹이가 작으면 먹고, 이동할 수 있음.
      // 상어의 크기와 먹이가 같다면 못 먹고, 이동만 가능.
      distances[my][mx] = distances[y][x] + 1;
      if (map[my][mx] > 0 && map[my][mx] < sharkSize) {
        // 먹이를 먹을 수 있는 경우.
        if (distances[my][mx] < minDistance) {
          minY = my;
          minX = mx;
          minDistance = distances[my][mx];
        } else if (distances[my][mx] === minDistance) {
          if (my < minY) {
            minY = my;
            minX = mx;
            minDistance = distances[my][mx];
          } else if (my === minY && mx < minX) {
            minY = my;
            minX = mx;
            minDistance = distances[my][mx];
          }
        }
      }
      queue.push([my, mx]);
    }
  }
  return [minY, minX, minDistance];
}
