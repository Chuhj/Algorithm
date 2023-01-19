let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\n');

const [N, M, C] = input[0].split(' ').map(Number);
const W = input.slice(1, 1 + C).map((v) => v.split(' ').map(Number));
const [A, B] = input.slice(C + 1).map((v) => v.split(' ').map(Number));

let dp = Array(N)
  .fill()
  .map(() => Array(M).fill(0));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    // A대학 i번째 학생과 B대학 j번째 학생이 악수를 했을 때
    let first = W[A[i] - 1][B[j] - 1];
    if (i > 0 && j > 0) {
      first += dp[i - 1][j - 1];
    }

    // A대학 i번째 학생이 악수를 하지 않았을 때
    const second = i > 0 ? dp[i - 1][j] : 0;

    // B대학 j번째 학생이 악수를 하지 않았을 때
    const third = j > 0 ? dp[i][j - 1] : 0;

    dp[i][j] = Math.max(first, second, third);
  }
}

console.log(dp[N - 1][M - 1]);
