const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = input[0];
const cards = input[1].split(' ').map(Number);
const M = input[2];
const compares = input[3].split(' ').map(Number);

cards.sort((a, b) => a - b);

const answer = [];

for (const compare of compares) {
  answer.push(binarySearch(compare) ? 1 : 0);
}

console.log(answer.join(' '));

function binarySearch(target) {
  let lo = 0;
  let hi = N - 1;

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);

    if (cards[mid] === target) {
      return true;
    } else if (cards[mid] > target) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return false;
}
