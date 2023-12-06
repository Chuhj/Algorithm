function solution(users, emoticons) {
  let answer = [0, 0];
  const permutations = getPermutations(emoticons.length, [10, 20, 30, 40]);

  for (const permutation of permutations) {
    let plus = 0;
    let totalCost = 0;
    const discountedEmoticons = emoticons.map(
      (emoticon, index) => (emoticon * (100 - permutation[index])) / 100
    );

    for (const [userRate, userCost] of users) {
      const cost = discountedEmoticons.reduce((acc, cur, index) => {
        if (userRate <= permutation[index]) return acc + cur;
        else return acc;
      }, 0);

      if (userCost <= cost) plus += 1;
      else totalCost += cost;
    }

    if (answer[0] < plus) {
      answer = [plus, totalCost];
    } else if (answer[0] === plus && answer[1] < totalCost) {
      answer = [plus, totalCost];
    }
  }

  return answer;
}

function getPermutations(n, array) {
  const result = [];
  if (n === 1) return array.map((v) => [v]);

  array.forEach((value, index, origin) => {
    const rest = origin;
    const permutations = getPermutations(n - 1, rest);
    result.push(...permutations.map((permutaion) => [value, ...permutaion]));
  });
  return result;
}
