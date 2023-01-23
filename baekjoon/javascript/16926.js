let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m, rotate] = input[0].split(' ').map(Number);
const array = input.slice(1).map((v) => v.split(' ').map(Number));

const rectNum = Math.min(n, m) / 2;

// O(nr)
// 30000
for (let i = 0; i < rectNum; i++) {
  for (let _ = 0; _ < rotate; _++) {
    const row = n - i - 1;
    const col = m - i - 1;

    const temp = array[row][i]; // 현재 돌리는 사각형의 좌측 하단의 값

    for (let r = row; r > i; r--) {
      // 왼쪽 변을 밑으로 옮김
      array[r][i] = array[r - 1][i];
    }
    for (let c = i; c < col; c++) {
      // 위쪽 변을 왼쪽으로 옮김
      array[i][c] = array[i][c + 1];
    }
    for (let r = i; r < row; r++) {
      // 오른쪽 변을 위쪽으로 옮김
      array[r][col] = array[r + 1][col];
    }
    for (let c = col; c > 1 + i; c--) {
      // 밑쪽 변을 오른쪽으로 옮김
      array[row][c] = array[row][c - 1];
    }

    array[row][1 + i] = temp; // 빠져있던 값을 원 위치에 넣어줌
  }
}

for (const row of array) {
  console.log(row.join(' '));
}
