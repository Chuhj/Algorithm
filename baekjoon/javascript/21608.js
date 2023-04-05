const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const students = input.slice(1).map((v) => v.split(' ').map((v) => Number(v)));

const likesObj = {}; // 만족도를 계산하기 위해 { 학생: 좋아하는학생 } 객체를 만듦.
const map = Array(n)
  .fill()
  .map(() => Array(n).fill(0));

// 인접한 칸 - 상하좌우
const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];

for (const [student, ...likes] of students) {
  likesObj[student] = likes;
  // 비어있는 칸 중에서 좋아하는 학생이 인접한 칸에 가장 많은 칸으로 자리를 정한다.
  // 1을 만족하는 칸이 여러 개이면, 인접한 칸 중에서 비어있는 칸이 가장 많은 칸으로 자리를 정한다.
  // 2를 만족하는 칸도 여러 개인 경우에는 행의 번호가 가장 작은 칸으로, 그러한 칸도 여러 개이면 열의 번호가 가장 작은 칸으로 자리를 정한다.
  let location = [-1, -1];
  let maxLike = -1;
  let maxEmpty = -1;

  for (let i = n - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      // 끝에서 부터 탐색해야 3번조건을 만족할 수 있음.
      if (map[i][j] !== 0) continue;

      let likeCount = 0;
      let emptyCount = 0;

      for (let k = 0; k < 4; k++) {
        const [my, mx] = [i + dy[k], j + dx[k]];
        if (my < 0 || mx < 0 || my >= n || mx >= n) continue;

        if (likes.includes(map[my][mx])) likeCount += 1;
        if (map[my][mx] === 0) emptyCount += 1;
      }

      // map[i][j] 자리에 앉았을 경우 인접한 곳의 좋아하는 학생의 수와 빈 자리의 수를 구했음.
      // 인접한 칸의 좋아하는 학생이나 빈칸이 가장 많은 칸인지는 비교를 통해 업데이트 해나감.
      if (likeCount > maxLike) {
        maxLike = likeCount;
        maxEmpty = emptyCount;
        location = [i, j];
      } else if (likeCount === maxLike) {
        if (emptyCount >= maxEmpty) {
          maxEmpty = emptyCount;
          maxLike = likeCount;
          location = [i, j];
        }
      }
    }
  }

  map[location[0]][location[1]] = student;
}

const satisObj = {
  0: 0,
  1: 1,
  2: 10,
  3: 100,
  4: 1000,
};

let result = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    let likeCount = 0;
    for (let k = 0; k < 4; k++) {
      const [my, mx] = [i + dy[k], j + dx[k]];
      if (my < 0 || mx < 0 || my >= n || mx >= n) continue;
      if (likesObj[map[i][j]].includes(map[my][mx])) likeCount += 1;
    }
    result += satisObj[likeCount];
  }
}

console.log(map, result);
