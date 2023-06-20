function solution(n) {
  const board = Array(n).fill(-1);
  let count = 0;

  nQueen(0);

  function nQueen(row) {
    if (row === n) return (count += 1);
    for (let col = 0; col < n; col++) {
      board[row] = col;
      if (check(row)) nQueen(row + 1);
    }
  }

  function check(row) {
    // 놓으면 안되는 경우 검사
    for (let i = 0; i < row; i++) {
      // 같은 열에 놓거나, 대각선에 놓을 때
      if (board[row] === board[i] || Math.abs(board[row] - board[i]) === row - i) return false;
    }
    return true;
  }

  return count;
}
