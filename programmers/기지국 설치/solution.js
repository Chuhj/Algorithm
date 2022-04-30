function solution(n, stations, w) {
  var answer = 0;
  let start = 1;
  stations.forEach((s) => {
    // 빈곳의 크기를 구해 기지국 하나당 크기를 나눠줌
    answer += Math.ceil((s - w - start) / (w * 2 + 1));
    start = s + w + 1;
  });

  answer += Math.ceil((n - start + 1) / (w * 2 + 1));

  return answer;
}
