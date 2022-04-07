function solution(places) {
  let answer = [];
  for (let place of places) {
    place = place.map((p) => p.split(''));
    answer.push(checkDistance(place));
  }
  return answer;
}

function checkDistance(place) {
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      if (place[row][col] !== 'P') continue;
      // 오른쪽 확인
      if (col <= 3 && place[row][col + 1] !== 'X') {
        if (place[row][col + 1] === 'P') return 0;
        if (row <= 3 && place[row + 1][col + 1] === 'P') return 0;
        if (
          col <= 2 &&
          place[row][col + 1] === 'O' &&
          place[row][col + 2] === 'P'
        )
          return 0;
      }
      // 왼쪽 확인
      if (col >= 1 && place[row][col - 1] !== 'X') {
        if (place[row][col - 1] === 'P') return 0;
        if (row <= 3 && place[row + 1][col - 1] === 'P') return 0;
        if (
          col >= 2 &&
          place[row][col - 1] === 'O' &&
          place[row][col - 2] === 'P'
        )
          return 0;
      }
      // 밑 확인
      if (row <= 3 && place[row + 1][col] !== 'X') {
        if (place[row + 1][col] === 'P') return 0;
        if (col >= 1 && place[row + 1][col - 1] === 'P') return 0;
        if (col <= 3 && place[row + 1][col + 1] === 'P') return 0;
        if (
          row <= 2 &&
          place[row + 1][col] === 'O' &&
          place[row + 2][col] === 'P'
        )
          return 0;
      }
    }
  }
  return 1;
}
