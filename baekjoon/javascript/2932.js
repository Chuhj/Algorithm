const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const nums = input.slice(1, 1 + k).map((string) => {
  const numInfo = string.split(' ').map(Number);
  numInfo[1] -= 1;
  numInfo[2] -= 1;
  numInfo.push(Math.floor((numInfo[0] - 1) / n));
  numInfo.push((numInfo[0] - 1) % n);
  return numInfo;
});

// 회전횟수는 뺄셈으로 구할 수 있음.
// 2차원 배열로 표를 직접 회전시킬 수 있음 => 1억개 item으로 메모리 초과.
// 필요한 인덱스만 저장해야 함.
// 회전시킨 후, 회전예정인 수들이 영향을 받음. (같은 수 or 같은 열 or 같은 행)

for (let i = 0; i < nums.length; i++) {
  const [num, tr, tc, cr, cc] = nums[i]; // 이동시킬 수, 목표 행, 목표 열, 현재 행, 현재 열

  let turnCount = 0;
  const rowTurn = tr < cr ? n + tr - cr : tr - cr;
  const colTurn = tc < cc ? n + tc - cc : tc - cc;
  turnCount += rowTurn + colTurn;

  for (let j = i + 1; j < nums.length; j++) {
    // 나머지 수의 현재 인덱스를 변경해줌.
    const [nextNum, nextTr, nextTc, nextCr, nextCc] = nums[j];
    if (nextNum === num) {
      // 다음 회전에 같은 수를 이동 시킨다면 현재 위치를 이동한 위치로 변경
      nums[j][3] = tr;
      nums[j][4] = tc;
    } else if (nextCr === cr) {
      // 이동 시킬 값의 행이 이전에 이동시킨 행과 같다면
      nums[j][4] += colTurn;
      if (nums[j][4] >= n) {
        nums[j][4] = nums[j][4] % n;
      }
    } else if (nextCc === tc) {
      // 이동 시킬 값의 열이 이전에 이동시킨 열과 같다면
      nums[j][3] += rowTurn;
      if (nums[j][3] >= n) {
        nums[j][3] = nums[j][3] % n;
      }
    }
  }

  console.log(turnCount);
}
