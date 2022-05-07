function solution(N, road, K) {
  let graph = Array.from(new Array(N + 1), () => []);

  for (const r of road) {
    const [a, b, time] = r;
    graph[a].push([a, b, time]);
    graph[b].push([b, a, time]);
  }

  const queue = [...graph[1]];
  let d = new Array(N + 1).fill(Infinity);
  d[1] = 0;

  while (queue.length > 0) {
    const [from, to, time] = queue.shift();

    if (d[from] + time < d[to]) {
      d[to] = d[from] + time;
      queue.push(...graph[to]);
    }
  }

  return d.filter((v) => v <= K).length;
}
