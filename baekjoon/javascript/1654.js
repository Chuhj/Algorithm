const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();
input = input.split('\n');

const [K, N] = input[0].split(' ').map((v) => Number(v));
const lans = input.slice(1).map((v) => Number(v));

let lo = 1;
let hi = Math.max(...lans);

while (lo <= hi) {
  const mid = Math.floor((hi + lo) / 2);
  const lansCount = lans.reduce((acc, lan) => acc + Math.floor(lan / mid), 0);

  if (lansCount >= N) {
    lo = mid + 1;
  } else {
    hi = mid - 1;
  }
}

console.log(hi);
