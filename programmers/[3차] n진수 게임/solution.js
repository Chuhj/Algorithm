function solution(n, t, m, p) {
  let tube = [];
  let total = [];
  let num = 0;

  while (total.length < t * m) {
    num
      .toString(n)
      .split('')
      .forEach((v) => total.push(v));
    num += 1;
  }

  total.forEach((v, i) => {
    if (((i + 1) % m || m) === p) {
      if (tube.length < t) tube.push(v);
    }
  });

  return tube.join('').toUpperCase();
}

// function solution(n, t, m, p) {
//   let num = 0;
//   let order = 1;
//   const tube = [];
//   const queue = [];

//   while (tube.length < t) {
//       if (queue.length === 0) {
//           num.toString(n).split('').forEach((v) => queue.push(v));
//           num += 1;
//       }
//       const currentChar = queue.shift();
//       if ((order % m || m) === p) {
//           tube.push(currentChar);
//       }
//       order += 1;

//   }

//   return tube.join('').toUpperCase();
// }
