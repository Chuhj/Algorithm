function solution(bridge_length, weight, truck_weights) {
  var answer = 0;
  let across = [];
  let acrossProgress = [];
  while (across[0] || truck_weights[0]) {
    if (acrossProgress[0] > bridge_length) {
      // 다리를 다 건너갔다면 건너간 트럭을 빼줌
      across.shift();
      acrossProgress.shift();
    }
    if (bridge_length > across.length) {
      if (across.reduce((a, c) => a + c, 0) + truck_weights[0] <= weight) {
        // 대기열 첫 번째 트럭을 다리에 올렸을 때 다리가 견디는 무게와 같거나 작으면 트럭을 올림
        across.push(truck_weights.shift());
        acrossProgress.push(1);
      }
    }
    acrossProgress = acrossProgress.map((v) => v + 1); // 다리에 있는 트럭이 건넌 거리를 1씩 늘림
    answer += 1;
  }
  console.log(answer);
  return answer;
}

console.log(solution(2, 10, [7, 4, 5, 6]));
