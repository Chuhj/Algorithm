let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const lectures = input[1].split(' ').map(Number);

let lo = 1;
let hi = 1000000000;

while (lo <= hi) {
  const mid = Math.floor((lo + hi) / 2);

  let count = 0;
  let sum = 0;

  for (const lecture of lectures) {
    if (lecture > mid) {
      // 강의 영상의 길이가 현재 블루레이의 최대길이인 mid보다 크다면 영상을 담지못함.
      // mid를 늘려야 하니 count를 m보다 크게 설정하고 중단.
      count = m + 1;
      break;
    }
    if (sum + lecture > mid) {
      count += 1;
      sum = lecture;
    } else if (sum + lecture === mid) {
      count += 1;
      sum = 0;
    } else {
      sum += lecture;
    }
  }

  if (sum > 0) count += 1; // 마지막 강의길이에 대해 계산.

  if (count <= m) {
    hi = mid - 1;
  } else {
    lo = mid + 1;
  }
}

console.log(lo);
