function solution(n, a, b) {
  let round = 1;
  while (true) {
    if (a % 2 === 0) {
      let opponent = a - 1;
      if (opponent === b) {
        break;
      }
    } else {
      let opponent = a + 1;
      if (opponent === b) {
        break;
      }
    }
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    round++;
  }
  return round;
}
