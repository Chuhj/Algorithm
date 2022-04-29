function solution(gems) {
  const count = new Set(gems).size;
  const map = new Map();
  let answer = [];
  let lp = 0;
  let rp = 0;

  map.set(gems[lp], 1);

  while (rp < gems.length && lp < gems.length) {
    if (count === map.size) {
      answer.push([lp + 1, rp + 1]);
      if (map.get(gems[lp]) <= 1) {
        map.delete(gems[lp]);
      } else {
        map.set(gems[lp], map.get(gems[lp]) - 1);
      }
      lp += 1;
    } else {
      map.set(gems[rp + 1], map.get(gems[rp + 1]) + 1 || 1);
      rp += 1;
    }
  }

  answer.sort((a, b) => a[1] - a[0] - (b[1] - b[0]));
  return answer[0];
}
