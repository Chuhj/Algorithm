const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [h, w] = input[0].split(' ').map(Number);
const n = Number(input[1]);
let stickers = input.slice(2).map((v) => v.split(' ').map(Number));

let answer = 0;

// 모든 경우의 수
for (let i = 0; i < n - 1; i++) {
  for (let j = i + 1; j < n; j++) {
    const [r1, c1] = stickers[i];
    const [r2, c2] = stickers[j];
    if (
      // 가로로 붙였을 때
      (Math.max(r1, r2) <= h && c1 + c2 <= w) ||
      (Math.max(r1, c2) <= h && c1 + r2 <= w) ||
      (Math.max(c1, r2) <= h && r1 + c2 <= w) ||
      (Math.max(c1, c2) <= h && r1 + r2 <= w) ||
      // 세로로 붙였을 때
      (Math.max(c1, c2) <= w && r1 + r2 <= h) ||
      (Math.max(c1, r2) <= w && r1 + c2 <= h) ||
      (Math.max(r1, c2) <= w && c1 + r2 <= h) ||
      (Math.max(r1, r2) <= w && c1 + c2 <= h)
    ) {
      answer = Math.max(answer, r1 * c1 + r2 * c2);
    }
  }
}
console.log(answer);
