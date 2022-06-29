function solution(dartResult) {
  let answer = 0;
  let temp = '';

  let prevPrev = 0;
  let prev = 0;
  for (const c of dartResult) {
    if (c === '*') {
      answer += prev + prevPrev;
      prev *= 2;
      prevPrev *= 2;
      continue;
    }
    if (c === '#') {
      answer -= 2 * prev;
      prev *= -1;
      continue;
    }

    temp += c;
    if (c === 'S' || c === 'D' || c === 'T') {
      const score = parseInt(temp.slice(0, temp.length - 1), 10);
      let bonus = temp[temp.length - 1];
      if (bonus === 'S') {
        bonus = 1;
      } else if (bonus === 'D') {
        bonus = 2;
      } else if (bonus === 'T') {
        bonus = 3;
      }
      const total = Math.pow(score, bonus);

      answer += total;
      prevPrev = prev;
      prev = total;
      temp = '';
    }
  }

  return answer;
}
