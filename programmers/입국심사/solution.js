function solution(n, times) {
  let left = 0;
  let right = 10 ** 18;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const totalPeople = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);

    if (totalPeople >= n) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return right;
}
