function solution(A, B) {
  let answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  let point = 0;
  for (let i = 0; i < A.length; i++) {
    // A를 먼저 순회하며 비교
    while (point < B.length) {
      if (A[i] >= B[point]) {
        // 점수를 얻을 수 없다면 B에서 사원 삭제
        B.splice(point, 1);
        continue;
      } else {
        // 점수를 얻는다면 포인터도 늘림
        answer += 1;
        point += 1;
        break;
      }
    }
  }
  return answer;
}
