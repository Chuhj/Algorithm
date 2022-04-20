function solution(relation) {
  let candidateKeys = [];
  const column = relation[0].length;
  const numsArray = new Array(column).fill().map((v, i) => i);

  const combinations = [];
  for (let i = 1; i <= column; i++) {
    combinations.push(...getCombinations(numsArray, i));
  }

  // 유일성 체크
  function isUnique(comb) {
    const result = new Array(relation.length).fill().map((v) => '');
    relation.forEach((row, i) => {
      for (const num of comb) {
        result[i] += row[num];
      }
    });
    return result.length === new Set(result).size;
  }

  // 최소성 체크
  function isMinimal(comb) {
    // 현재까지의 후보키를 포함하는 것이 있으면 최소성X
    for (const key of candidateKeys) {
      if (key.every((v) => comb.includes(v))) return false;
    }
    return true;
  }

  for (const comb of combinations) {
    if (isUnique(comb) && isMinimal(comb)) candidateKeys.push(comb);
  }

  return candidateKeys.length;
}

function getCombinations(array, selectNumber) {
  if (selectNumber === 1) return array.map((v) => [v]);
  const result = [];

  array.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);

    const combinations = getCombinations(rest, selectNumber - 1);

    result.push(...combinations.map((v) => [fixed, ...v]));
  });

  return result;
}
