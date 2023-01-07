const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = input[0];
const cards = input[1].split(' ').map(Number);
const M = input[2];
const compares = input[3].split(' ').map(Number);

const answer = [];

const map = cards.reduce((acc, cur) => {
  if (!acc[cur]) acc[cur] = 0;
  acc[cur] += 1;
  return acc;
}, {});

for (const compare of compares) {
  answer.push(map[compare] ? map[compare] : 0);
}

console.log(answer.join(' '));
