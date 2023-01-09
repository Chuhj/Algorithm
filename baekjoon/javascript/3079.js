const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [N, M] = input[0].split(' ').map(BigInt);
let array = input.slice(1, Number(1n + N)).map(BigInt);

array.sort((a, b) => {
  if (a - b > 0) return 1;
  else return -1;
});

let lo = 1n;
let hi = array[array.length - 1] * M;
let answer = hi;

while (lo <= hi) {
  const mid = (lo + hi) / 2n;
  const num = array.reduce((acc, cur) => acc + mid / cur, 0n);

  if (num < M) {
    lo = mid + 1n;
  } else {
    hi = mid - 1n;
    answer = mid;
  }
}

console.log(answer.toString());
// BigInt로 시간초과 해결
