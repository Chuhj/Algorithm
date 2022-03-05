function solution(N, stages) {
  const failRates = [];

  for (let i = 1; i < N + 1; i++) {
    let numer = 0;
    let denom = 0;
    for (let j = 0; j < stages.length; j++) {
      if (stages[j] === i) numer++;
      if (stages[j] >= i) denom++;
    }
    failRates.push([numer / denom, i]);
  }

  failRates.sort((a, b) => b[0] - a[0]);

  return failRates.map((rate) => rate[1]);
}
