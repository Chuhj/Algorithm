const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const array = input.slice(1, 1 + M).map(Number);

let lo = 1;
let hi = Math.max(...array);
let answer = Infinity;

while (lo <= hi) {
  const mid = Math.floor((lo + hi) / 2);
  const count = array.reduce((acc, cur) => acc + Math.ceil(cur / mid), 0);

  if (count <= N) {
    hi = mid - 1;
    answer = Math.min(answer, mid);
  } else {
    lo = mid + 1;
  }
}

console.log(answer);
