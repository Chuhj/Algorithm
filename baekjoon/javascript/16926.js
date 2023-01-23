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

    const temp = array[row][i];

    for (let r = row; r > i; r--) {
      array[r][i] = array[r - 1][i];
    }
    for (let c = i; c < col; c++) {
      array[i][c] = array[i][c + 1];
    }
    for (let r = i; r < row; r++) {
      array[r][col] = array[r + 1][col];
    }
    for (let c = col; c > 1 + i; c--) {
      array[row][c] = array[row][c - 1];
    }
    array[row][1 + i] = temp;
  }
}

for (const row of array) {
  console.log(row.join(' '));
}
