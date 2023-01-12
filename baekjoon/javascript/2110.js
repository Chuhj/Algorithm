const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N, C] = input[0].split(' ').map(Number);
const array = input.slice(1, 1 + N).map(Number);
array.sort((a, b) => a - b);

let lo = 1;
let hi = array[array.length - 1] - array[0];

while (lo <= hi) {
  const mid = Math.floor((lo + hi) / 2);

  let count = 1;
  let standard = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] - standard >= mid) {
      count += 1;
      standard = array[i];
    }
  }

  if (count < C) {
    hi = mid - 1;
  } else {
    lo = mid + 1;
  }
}

console.log(hi);
