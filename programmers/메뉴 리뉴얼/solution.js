function solution(orders, course) {
  let answer = [];
  for (const num of course) {
    // 코스 숫자마다
    // 모든 조합을 구함
    let combinations = [];
    for (const order of orders) {
      const orderArray = order.split('');
      combinations.push(
        ...getCombinations(orderArray, num).map((comb) => comb.sort().join(''))
      );
    }

    // 조합들이 몇번 씩 나왔는지 구함
    const combCount = combinations.reduce((result, comb) => {
      result[comb] = (result[comb] || 0) + 1;
      return result;
    }, {});

    // 두 번 이상 나오고, 가장 많이 나온 조합들을 선택
    let maxNum = 0;
    for (comb in combCount) {
      if (combCount[comb] > maxNum) maxNum = combCount[comb];
    }
    for (comb in combCount) {
      if (combCount[comb] >= 2 && combCount[comb] === maxNum) answer.push(comb);
    }
  }
  return answer.sort();
}

function getCombinations(array, selectNumber) {
  const result = [];
  if (selectNumber === 1) return array.map((v) => [v]);
  array.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    result.push(...combinations.map((v) => [fixed, ...v]));
  });
  return result;
}
