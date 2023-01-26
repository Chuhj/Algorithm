let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const map = input.slice(1).map((row) => row.split(' ').map(Number));

const chickenHouses = []; // 치킨집의 좌표 기록
const houses = []; // 집의 좌표 기록

// 치킨집과 집의 좌표 push
for (let i = 0; i < map.length; i++) {
  for (let j = 0; j < map[0].length; j++) {
    const house = map[i][j];
    if (house === 2) {
      chickenHouses.push([i, j]);
    } else if (house === 1) {
      houses.push([i, j]);
    }
  }
}

// 모든 치킨집에서 m개를 뽑은 조합
const combinations = getCombinations(chickenHouses, m);

// 모든 치킨집에서 m개를 뽑은 조합의 치킨 거리 중 가장 작은 값 출력
let answer = Infinity;
for (const comb of combinations) {
  let total = 0;
  for (const [y, x] of houses) {
    let minDistance = Infinity;
    for (const [chickenY, chickenX] of comb) {
      const distance = Math.abs(chickenY - y) + Math.abs(chickenX - x);
      minDistance = Math.min(minDistance, distance);
    }
    total += minDistance;
  }
  answer = Math.min(answer, total);
}

console.log(answer);

function getCombinations(array, selectNum) {
  const result = [];
  if (selectNum === 1) return array.map((item) => [item]);

  array.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNum - 1);
    result.push(...combinations.map((comb) => [fixed, ...comb]));
  });
  return result;
}
