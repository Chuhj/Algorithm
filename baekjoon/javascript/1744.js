let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const array = input.slice(1).map(Number);
// 양수는 큰수들 부터 차례로 묶기
// 음수는 작은수들 부터 차례로 묶기
// 음수들의 개수가 홀수이고 0이 없다면 음수 중 제일 큰 값 더하기

array.sort((a, b) => {
  if (a < 0 && b < 0) return a - b; // 음수는 오름차순
  return b - a; // 양수는 내림차순
});
const positives = array.filter((v) => v > 0);
const negatives = array.filter((v) => v < 0);
const zeroCount = array.filter((v) => v === 0).length;
console.log(positives, negatives, zeroCount);
let answer = 0;

// 양수
let i = 0;
while (i < positives.length - 1) {
  if (positives[i] + positives[i + 1] >= positives[i] * positives[i + 1]) {
    answer += positives[i];
    i += 1;
  } else {
    answer += positives[i] * positives[i + 1];
    i += 2;
  }
}
if (i === positives.length - 1) answer += positives[positives.length - 1];

// 음수
for (let i = 0; i < negatives.length - 1; i += 2) {
  answer += negatives[i] * negatives[i + 1];
  console.log(answer);
}
if (negatives.length % 2 === 1 && zeroCount === 0) {
  answer += negatives[negatives.length - 1];
}

console.log(answer);
