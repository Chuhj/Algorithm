function solution(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  const array1 = validate(str1);
  const array2 = validate(str2);

  const union = new Set([...array1, ...array2]);
  let intersection = 0;

  for (const element of union) {
    const count1 = array1.filter((v) => v === element).length;
    const count2 = array2.filter((v) => v === element).length;

    intersection += Math.min(count1, count2);
  }

  if (array1.length === 0 && array2.length === 0) return 65536;

  const answer =
    (intersection * 65536) / (array1.length + array2.length - intersection);
  return Math.floor(answer);
}

function validate(str) {
  const result = [];
  for (let i = 0; i < str.length - 1; i++) {
    const isMatch = str.substr(i, 2).match(/[a-z]{2}/);
    if (isMatch) result.push(str.substr(i, 2));
  }
  return result;
}
