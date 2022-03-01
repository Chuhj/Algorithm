function solution(numbers, hand) {
  let answer = '';
  let curLeft = '*';
  let curRight = '#';

  let keypad = {
    1: [0, 0],
    2: [1, 0],
    3: [2, 0],
    4: [0, 1],
    5: [1, 1],
    6: [2, 1],
    7: [0, 2],
    8: [1, 2],
    9: [2, 2],
    '*': [0, 3],
    0: [1, 3],
    '#': [2, 3],
  };

  let distLeft = 0;
  let distRight = 0;

  function getDistance(a, b) {
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
  }

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];

    if (number === 1 || number === 4 || number === 7) {
      // left
      answer += 'L';
      curLeft = number;
    } else if (number === 3 || number === 6 || number === 9) {
      //right
      answer += 'R';
      curRight = number;
    } else {
      // center
      distLeft = getDistance(keypad[number], keypad[curLeft]);
      distRight = getDistance(keypad[number], keypad[curRight]);

      if (distLeft === distRight) {
        // 거리 같을 때
        if (hand === 'right') {
          // 오른손잡이
          answer += 'R';
          curRight = number;
        } else {
          answer += 'L';
          curLeft = number;
        }
      } else if (distLeft > distRight) {
        // 다를 때
        answer += 'R';
        curRight = number;
      } else {
        answer += 'L';
        curLeft = number;
      }
    }
  }
  return answer;
}
