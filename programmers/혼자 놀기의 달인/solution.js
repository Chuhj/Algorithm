function solution(cards) {
  const n = cards.length;
  const visited = Array(n).fill(false);
  const array = [];

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;

    let count = 0;
    let next = cards[i] - 1;

    while (!visited[next]) {
      count += 1;
      visited[next] = true;
      next = cards[next] - 1;
    }

    array.push(count);
  }

  array.sort((a, b) => b - a);
  return array.length < 2 ? 0 : array[0] * array[1];
}
