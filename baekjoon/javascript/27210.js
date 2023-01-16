// 연속 부분 수열의 1의 개수와 2의 개수의 차이를 최대로
// max(| 1의 개수 - 2의 개수 |) == max(1의 개수 - 2의 개수, 2의 개수 - 1의 개수)
// 1: 1, 2: -1로 바꾸면 합으로 1의 개수를 구할 수 있음.
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0]);
const array = input[1].split(' ').map(Number);

let answer = 0;

const maps = [
  { 1: 1, 2: -1 },
  { 1: -1, 2: 1 },
];

for (const map of maps) {
  let dp = Array(N).fill(0);
  dp[0] = Math.max(map[array[0]], dp[0]);

  for (let i = 1; i < array.length; i++) {
    dp[i] = Math.max(dp[i - 1] + map[array[i]], dp[i]);
  }
  answer = Math.max(answer, Math.max(...dp));
}

console.log(answer);
