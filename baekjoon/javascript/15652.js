const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map((v) => Number(v));

const permutations = getPermutations(
  Array(N)
    .fill()
    .map((_, i) => i + 1),
  M
);

for (const permutation of permutations) {
  console.log(permutation.join(' '));
}

function getPermutations(array, n) {
  const result = [];
  if (n === 1) return array.map((value) => [value]);

  array.forEach((value, index, origin) => {
    const rest = origin.slice(index);
    const permutations = getPermutations(rest, n - 1);
    result.push(...permutations.map((values) => [value, ...values]));
  });

  return result;
}
