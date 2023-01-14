const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [N, M, L] = input[0].split(' ').map(Number);
const array = N === 0 ? [] : input[1].split(' ').map(Number);
array.push(0);
array.push(L);
array.sort((a, b) => a - b);

let lo = 1;
let hi = L;

while (lo <= hi) {
  const mid = Math.floor((lo + hi) / 2);

  let count = 0;
  for (let i = 1; i < array.length; i++) {
    count += Math.floor((array[i] - array[i - 1] - 1) / mid);
  }

  if (count <= M) {
    hi = mid - 1;
  } else {
    lo = mid + 1;
  }
}

console.log(lo);

// const [N, M, L] = input[0].split(' ').map(Number);
// const array = N === 0 ? [] : input[1].split(' ').map(Number);
// array.sort((a, b) => a - b);

// // N이 0일 경우도 있어서 복잡해짐
// let gaps = [];
// if (N === 0) {
//   gaps.push(L - 1);
// } else {
//   gaps.push(array[0] - 1);
//   for (let i = 1; i < array.length; i++) {
//     gaps.push(array[i] - array[i - 1] - 1);
//   }
//   gaps.push(L - array[array.length - 1] - 1);
// }

// let lo = 1;
// let hi = L;

// while (lo <= hi) {
//   const mid = Math.floor((lo + hi) / 2);

//   let count = 0;
//   for (const gap of gaps) {
//     count += Math.floor(gap / mid);
//   }

//   if (count <= M) {
//     hi = mid - 1;
//   } else {
//     lo = mid + 1;
//   }
// }

// console.log(lo);
