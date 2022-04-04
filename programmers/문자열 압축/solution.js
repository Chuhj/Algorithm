function solution(s) {
  let decreasedLengths = [];

  for (let unit = 1; unit <= Math.ceil(s.length / 2); unit++) {
    // 단위는 문자열 길이의 반까지만 하면 됨.
    let str = '';
    let count = 1;
    for (let i = 0; i < s.length; i += unit) {
      let current = s.substr(i, unit);
      let next = s.substr(i + unit, unit);

      if (current === next) {
        count++;
      } else {
        str += count > 1 ? String(count) + current : current;
        // 같은 문자열의 수가 2개 이상일 때 문자열의 수 까지 더함
        // 1개라면 문자열만 더함
        count = 1;
      }
    }
    decreasedLengths.push(str.length);
  }

  return Math.min(...decreasedLengths);
}
