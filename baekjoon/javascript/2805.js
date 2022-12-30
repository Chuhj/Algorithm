const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
input = input.split('\n');

const [N, M] = input[0].split(' ');
const trees = input[1].split(' ').map((v) => Number(v));

let lo = 0;
let hi = Math.max(...trees);

while (lo <= hi) {
  const mid = Math.floor((lo + hi) / 2);

  const sum = trees.reduce((acc, tree) => {
    return tree > mid ? acc + tree - mid : acc;
  }, 0);

  if (sum >= M) {
    lo = mid + 1;
  } else {
    hi = mid - 1;
  }
}

console.log(hi);
