function solution(d, budget) {
  let answer = 0;
  d.sort((a, b) => a - b);

  for (const money of d) {
    budget -= money;
    if (budget < 0) break;
    answer += 1;
  }

  return answer;
}
