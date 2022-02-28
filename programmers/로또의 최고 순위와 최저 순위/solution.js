function solution(lottos, win_nums) {
  let sameCount = 0;
  let zeroCount = 0;

  lottos.forEach((lotto) => {
    if (lotto === 0) {
      zeroCount++;
    }
    win_nums.forEach((num) => {
      if (lotto === num) {
        sameCount++;
      }
    });
  });

  let highest = 6;
  let lowest = 6;

  if (sameCount + zeroCount === 6) {
    highest = 1;
  } else if (sameCount + zeroCount === 5) {
    highest = 2;
  } else if (sameCount + zeroCount === 4) {
    highest = 3;
  } else if (sameCount + zeroCount === 3) {
    highest = 4;
  } else if (sameCount + zeroCount === 2) {
    highest = 5;
  }

  if (sameCount === 6) {
    lowest = 1;
  } else if (sameCount === 5) {
    lowest = 2;
  } else if (sameCount === 4) {
    lowest = 3;
  } else if (sameCount === 3) {
    lowest = 4;
  } else if (sameCount === 2) {
    lowest = 5;
  }

  return [highest, lowest];
}
