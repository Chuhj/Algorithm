function solution(progresses, speeds) {
  var answer = [];
  // reverse 하지 않고 20번 라인에서 pop() 대신 shift()로 처리 가능
  progresses.reverse();
  speeds.reverse();

  while (progresses.length > 0) {
    const minDays = Math.ceil(
      (100 - progresses[progresses.length - 1]) / speeds[speeds.length - 1]
    );
    // 맨 앞의 기능이 100% 이상이 되기 위한 최소 날짜 수
    progresses = progresses.map((p, i) => p + speeds[i] * minDays); // 그 날짜 만큼 모든 progress에 각자의 speed를 곱해 더해줌

    let deployNum = 0;

    let i = progresses.length - 1;
    while (progresses.length > 0) {
      if (progresses[i] < 100) {
        // progress가 100 보다 작으면 반복 종료
        break;
      }
      if (progresses[i] >= 100) {
        // progress가 100보다 크다면 pop 해주고 deployNum에 더해줌
        progresses.pop();
        speeds.pop();
        deployNum++;
      }
      i--;
    }
    answer.push(deployNum); // 위 반복이 종료되었을 때 answer에 값을 push
  }
  return answer;
}
