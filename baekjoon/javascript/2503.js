const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]);
const array = input.slice(1, 1 + n).map((s) => s.split(' ').map((num, index) => (index === 0 ? num.slice(0, 3) : Number(num))));

const permutations = getPermutations(
  Array(9)
    .fill()
    .map((_, i) => String(i + 1)),
  3
);
const check = Array(permutations.length).fill(1);

for (const [num, strike, ball] of array) {
  for (let i = 0; i < permutations.length; i++) {
    const compare = permutations[i];
    let compareStrike = 0;
    let compareBall = 0;

    for (let j = 0; j < 3; j++) {
      if (compare[j] === num[j]) {
        compareStrike += 1;
      } else if (num.includes(compare[j])) {
        compareBall += 1;
      }
    }

    if (compareStrike !== strike || compareBall !== ball) {
      check[i] = 0;
    }
  }
}

console.log(check.reduce((acc, cur) => acc + cur));

function getPermutations(array, n) {
  const result = [];
  if (n === 1) return array.map((v) => [v]);

  array.forEach((value, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, n - 1);
    result.push(...permutations.map((v) => [value, ...v]));
  });
  return result;
}
