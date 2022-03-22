// 조합
const array = [1, 2, 3, 4];

function getCombinations(array, selectNumber) {
  const result = [];
  if (selectNumber === 1) return array.map((e) => [e]);

  array.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);

    const combinations = getCombinations(rest, selectNumber - 1);

    result.push(...combinations.map((e) => [fixed, ...e]));
  });

  return result;
}

console.log(getCombinations(array, 3));
