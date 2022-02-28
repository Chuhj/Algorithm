function solution(s) {
  const english = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  for (let i = 0; i < 10; i++) {
    s = s.replace(new RegExp(english[i], 'g'), i);
  }

  return parseInt(s);
}
