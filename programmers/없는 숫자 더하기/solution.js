function solution(numbers) {
  const allNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const noNumbers = allNumbers.filter((n) => {
    return !numbers.some((num) => num === n);
  });

  const answer = noNumbers.reduce((prev, next) => prev + next);

  return answer;
}
