const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const n = Number(input);

let square = 0;
for (let i = 0; i <= 30; i++) {
  if (n === Math.pow(2, i)) {
    square = 1;
    break;
  }
}

console.log(square);
