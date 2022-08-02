function solution(a, b) {
  const namesOfDay = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
  const days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let sum = 0;
  for (let i = 0; i < a - 1; i++) {
    sum += days[i];
  }

  return namesOfDay[(sum + b) % 7];
}
