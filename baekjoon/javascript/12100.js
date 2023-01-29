let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const board = input.slice(1, 1 + n).map((row) => row.split(' ').map(Number));

// 5번 이동하는 경우에는 순서가 중요하고 중복이 허용되기 때문에 중복순열 사용
let answer = 0;
const permutations = getPermutations([1, 2, 3, 4], 5);

for (const permutation of permutations) {
  // 순열마다 순서대로 이동하면서 정답을 갱신해줌
  // permutations.length === 1024
  // 연산량 1024 * 5 * 20 * 20 * 20 * 20 = = 819200000 8억정도
  // 시간복잡도 O(n^4) 이지만 n의 최대가 20이므로 시간초과는 나지않음.
  const boardCopy = board.map((v) => [...v]);

  for (const move of permutation) {
    if (move === 1) moveLeft(boardCopy);
    if (move === 2) moveRight(boardCopy);
    if (move === 3) moveUp(boardCopy);
    if (move === 4) moveDown(boardCopy);
    for (const row of boardCopy) {
      answer = Math.max(answer, ...row);
    }
  }
}

console.log(answer);

function getPermutations(array, selectNum) {
  const result = [];
  if (selectNum === 1) return array.map((v) => [v]);

  array.forEach((fixed, _, origin) => {
    const rest = origin;
    const permutations = getPermutations(rest, selectNum - 1);
    result.push(...permutations.map((v) => [fixed, ...v]));
  });
  return result;
}

function moveLeft(board) {
  // To left
  for (let row = 0; row < n; row++) {
    // Merge
    for (let i = 0; i < n - 1; i++) {
      if (board[row][i] === 0) continue;
      for (let j = i + 1; j < n; j++) {
        if (board[row][j] === 0) continue;
        if (board[row][i] !== board[row][j]) break;
        board[row][i] = board[row][i] * 2;
        board[row][j] = 0;
        i = j;
        break;
      }
    }
    // Stick
    for (let i = 0; i < n - 1; i++) {
      if (board[row][i] !== 0) continue;
      for (let j = i + 1; j < n; j++) {
        if (board[row][j] !== 0) {
          [board[row][i], board[row][j]] = [board[row][j], board[row][i]];
          break;
        }
      }
    }
  }
}

function moveRight(board) {
  // To right
  for (let row = 0; row < n; row++) {
    // Merge
    for (let i = n - 1; i > 0; i--) {
      if (board[row][i] === 0) continue;
      for (let j = i - 1; j >= 0; j--) {
        if (board[row][j] === 0) continue;
        if (board[row][i] !== board[row][j]) break;
        board[row][i] = board[row][i] * 2;
        board[row][j] = 0;
        i = j;
        break;
      }
    }
    // Stick
    for (let i = n - 1; i > 0; i--) {
      if (board[row][i] !== 0) continue;
      for (let j = i - 1; j >= 0; j--) {
        if (board[row][j] !== 0) {
          [board[row][i], board[row][j]] = [board[row][j], board[row][i]];
          break;
        }
      }
    }
  }
}

function moveUp(board) {
  // To up
  for (let col = 0; col < n; col++) {
    // Merge
    for (let i = 0; i < n - 1; i++) {
      if (board[i][col] === 0) continue;
      for (let j = i + 1; j < n; j++) {
        if (board[j][col] === 0) continue;
        if (board[i][col] !== board[j][col]) break;
        board[i][col] = board[i][col] * 2;
        board[j][col] = 0;
        i = j;
        break;
      }
    }
    // Stick
    for (let i = 0; i < n - 1; i++) {
      if (board[i][col] !== 0) continue;
      for (let j = i + 1; j < n; j++) {
        if (board[j][col] !== 0) {
          [board[i][col], board[j][col]] = [board[j][col], board[i][col]];
          break;
        }
      }
    }
  }
}

function moveDown(board) {
  // To down
  for (let col = 0; col < n; col++) {
    // Merge
    for (let i = n - 1; i > 0; i--) {
      if (board[i][col] === 0) continue;
      for (let j = i - 1; j >= 0; j--) {
        if (board[j][col] === 0) continue;
        if (board[i][col] !== board[j][col]) break;
        board[i][col] = board[i][col] * 2;
        board[j][col] = 0;
        i = j;
        break;
      }
    }
    // Stick
    for (let i = n - 1; i > 0; i--) {
      if (board[i][col] !== 0) continue;
      for (let j = i - 1; j >= 0; j--) {
        if (board[j][col] !== 0) {
          [board[i][col], board[j][col]] = [board[j][col], board[i][col]];
          break;
        }
      }
    }
  }
}
