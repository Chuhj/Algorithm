function solution(m, n, board) {
  let answer = 0;

  board = board.map((v) => v.split(''));

  while (true) {
    let breakBlocks = [];

    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        let curBlock = board[i][j];
        if (curBlock === 0) continue;
        // 오른쪽, 밑으로 4칸이 되는지 체크
        if (curBlock === board[i][j + 1] && curBlock === board[i + 1][j] && curBlock === board[i + 1][j + 1]) {
          breakBlocks.push([i, j]);
          breakBlocks.push([i, j + 1]);
          breakBlocks.push([i + 1, j]);
          breakBlocks.push([i + 1, j + 1]);
        }
      }
    }

    if (breakBlocks.length === 0) break;

    // 부서지는 블럭들 0으로 바꿈
    for (const [y, x] of breakBlocks) {
      board[y][x] = 0;
    }

    // 밑에서부터 빈 곳이 나오면 위의 블럭을 내려줌
    for (let i = m - 1; i >= 0; i--) {
      for (let j = n - 1; j >= 0; j--) {
        if (board[i][j] !== 0) continue;
        for (let k = i - 1; k >= 0; k--) {
          if (board[k][j] === 0) continue;
          let temp = board[k][j];
          board[k][j] = board[i][j];
          board[i][j] = temp;
          break;
        }
      }
    }
  }

  // 0의 개수가 답
  board.forEach((array) => {
    answer += array.filter((v) => v === 0).length;
  });

  return answer;
}
