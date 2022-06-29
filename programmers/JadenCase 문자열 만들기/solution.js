function solution(s) {
  let answer = [];
  const strings = s.split(' ');

  for (const string of strings) {
    const first = string.substr(0, 1).toUpperCase();
    const rest = string.slice(1).toLowerCase();

    answer.push(first + rest);
  }

  return answer.join(' ');
}
