const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const k = Number(input[1]);
const apples = input.slice(2, 2 + k).map((a) => a.split(' ').map((v) => Number(v)));
const l = Number(input[2 + k]);
const turn = input.slice(3 + k).map((a) => a.split(' ').map((v, i) => (i === 0 ? Number(v) : v.replace(/\r/g, ''))));

// 뱀은 0, 0 부터 시작하고 처음에는 길이 1, 오른쪽을 향하고 머리부터 이동함.
// 게임종료까지 몇 초 걸리는가.
// 벽이나 자기 몸에 부딛히면 게임종료.

const map = Array(n)
  .fill()
  .map(() => Array(n).fill(0));

map[0][0] = 1;

for (const [row, col] of apples) {
  map[row - 1][col - 1] = 2;
}

const direction = {
  0: [0, 1],
  1: [1, 0],
  2: [0, -1],
  3: [-1, 0],
};

let curHead = [0, 0]; // 머리의 현재 위치
let curDirection = 0; // 머리의 방향
let turnIndex = 0; // 몇 번째 방향전환 인지
let time = 0; // 시간

// 뱀이 이동할 때 꼬리칸을 계속 비워주기 위해서는 꼬리의 정보를 따로 기록해야함.
let curTail = [0, 0];
let tailDirection = 0;
let tailTurnIndex = 0;
let tailTime = 0;

while (true) {
  const [dy, dx] = direction[curDirection];
  const [my, mx] = [curHead[0] + dy, curHead[1] + dx];

  time += 1;

  // 벽에 부딛혔을 경우
  if (my < 0 || mx < 0 || my >= n || mx >= n) break;

  if (map[my][mx] === 2) {
    // 사과를 만났을 경우
    map[my][mx] = 1;
    curHead = [my, mx];
  } else if (map[my][mx] === 0) {
    // 빈칸일 경우
    map[my][mx] = 1;
    curHead = [my, mx];
    map[curTail[0]][curTail[1]] = 0;

    // 꼬리를 이동
    tailTime += 1;
    const [tdy, tdx] = direction[tailDirection];
    const [tmy, tmx] = [curTail[0] + tdy, curTail[1] + tdx];

    if (tailTurnIndex < l && tailTime === turn[tailTurnIndex][0]) {
      const direction = turn[tailTurnIndex][1];
      if (direction === 'D') {
        tailDirection = (tailDirection + 1) % 4;
      } else {
        if (tailDirection - 1 < 0) tailDirection = 3;
        else tailDirection -= 1;
      }
      tailTurnIndex += 1;
    }
    curTail = [tmy, tmx];
  } else {
    // 자기 몸에 부딛히는 경우
    break;
  }

  if (turnIndex < l && time === turn[turnIndex][0]) {
    // 방향을 바꿔야 한다면
    const direction = turn[turnIndex][1];
    if (direction === 'D') {
      curDirection = (curDirection + 1) % 4;
    } else {
      if (curDirection === 0) curDirection = 3;
      else curDirection -= 1;
    }
    turnIndex += 1;
  }
}

console.log(time);
