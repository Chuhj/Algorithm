function solution(expression) {
  let answer = 0;
  let numsOrigin = [];
  let opersOrigin = [];

  let num = '';
  for (const char of expression) {
    if (char === '*' || char === '+' || char === '-') {
      numsOrigin.push(num);
      opersOrigin.push(char);
      num = '';
    } else {
      num += char;
    }
  }
  numsOrigin.push(num);

  const uniqueOperations = Array.from(new Set(opersOrigin));
  const permutations = getPermutations(uniqueOperations, uniqueOperations.length); // 연산자들에 대한 순열들 구함

  for (const priority of permutations) {
    let nums = Array.from(numsOrigin);
    let opers = Array.from(opersOrigin);

    for (const oper of priority) {
      while (opers.includes(oper)) {
        let index = opers.findIndex((e) => e === oper);
        nums[index] = caculate(nums[index], nums[index + 1], oper); // nums 배열에 계산 해나감
        opers.splice(index, 1);
        nums.splice(index + 1, 1);
      }
    }

    const result = Math.abs(nums[0]);
    answer = result > answer ? result : answer;
  }
  return answer;
}

function getPermutations(array, num) {
  const result = [];
  if (num === 1) return array.map((v) => [v]);

  array.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];

    const permutations = getPermutations(rest, num - 1);

    result.push(...permutations.map((e) => [fixed, ...e]));
  });

  return result;
}

function caculate(a, b, operation) {
  const num1 = Number(a);
  const num2 = Number(b);

  if (operation === '+') return num1 + num2;
  if (operation === '-') return num1 - num2;
  if (operation === '*') return num1 * num2;
}
