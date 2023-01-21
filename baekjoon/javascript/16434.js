let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, h] = input[0].split(' ').map(BigInt);
const rooms = input.slice(1).map((v) => v.split(' ').map(BigInt));

// number 범위를 벗어나기 때문에 숫자 모두 BigInt로 계산
let lo = 1n;
let hi = 123456000000000000n;

while (lo <= hi) {
  const mid = (lo + hi) / 2n;
  console.log(mid);
  if (survive(mid)) {
    hi = mid - 1n;
  } else {
    lo = mid + 1n;
  }
}

console.log(lo.toString());

function survive(mid) {
  let curAtk = h;
  let curHp = mid;
  for (const room of rooms) {
    const [t, mAtk, mHp] = room;

    if (t === 1n) {
      let attackedCount = mHp / curAtk;
      if (mHp % curAtk === 0n) attackedCount -= 1n;

      curHp -= mAtk * attackedCount;
      if (curHp <= 0n) return false;
    } else {
      curAtk += mAtk;
      curHp = mid < curHp + mHp ? mid : curHp + mHp;
    }
  }
  return true;
}

// // 용사가 죽어도 그냥 넘김
// let lo = 1;
// let hi = Number.MAX_SAFE_INTEGER;
// // let hi = 8999999999999999;

// while (lo <= hi) {
//   const mid = Math.floor((lo + hi) / 2);

//   let hAtk = h;
//   let hHp = mid;

//   for (const room of rooms) {
//     const [t, mAtk, mHp] = room;
//     if (t === 1) {
//       const atkCount = Math.floor(mHp / hAtk);
//       hHp -= mAtk * atkCount;
//     } else {
//       hAtk += mAtk;
//       hHp += mHp;
//       if (hHp > mid) hHp = mid;
//     }
//   }

//   if (hHp > 0) {
//     hi = mid - 1;
//   } else if (hHp <= 0) {
//     lo = mid + 1;
//   }
// }

// console.log(lo);
