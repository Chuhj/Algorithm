const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let n = Number(input[0]);

const array = Array(n)
  .fill()
  .map((_, i) => i + 1);

let index = 0;
let step = 1;

while (n > 1) {
  index = (index + Math.pow(step, 3) - 1) % n;
  array.splice(index, 1);

  n -= 1;
  step += 1;
}

console.log(array[0]);
