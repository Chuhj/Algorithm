const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m, r] = input[0].split(' ').map(Number);
const array = input.slice(1, 1 + n).map((row) => row.split(' ').map(Number));

const depth = Math.floor(Math.min(n, m) / 2);

for (let i = 0; i < depth; i++) {
  const rotateNum = r % (2 * (n - 2 * i) + 2 * (m - 2 * i) - 4); // 실제 회전 횟수
  for (let j = 0; j < rotateNum; j++) {
    // i 번째 사각형 돌리기
    const temp = array[i][i];

    // 윗 줄 돌리기
    for (let k = i; k < m - 1 - i; k++) {
      array[i][k] = array[i][k + 1];
    }

    // 오른쪽 줄 돌리기
    for (let k = i; k < n - 1 - i; k++) {
      array[k][m - 1 - i] = array[k + 1][m - 1 - i];
    }

    // 밑 줄 돌리기
    for (let k = m - 1 - i; k > i; k--) {
      array[n - 1 - i][k] = array[n - 1 - i][k - 1];
    }

    // 왼쪽 줄 돌리기
    for (let k = n - 1 - i; k > i; k--) {
      array[k][i] = array[k - 1][i];
    }

    array[i + 1][i] = temp;
  }
}

for (const row of array) {
  console.log(row.join(' '));
}
