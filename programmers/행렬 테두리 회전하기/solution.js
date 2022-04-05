function solution(rows, columns, queries) {
  let answer = [];
  let matrix = new Array(rows);

  for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < columns; j++) {
      matrix[i][j] = i * columns + j + 1;
    }
  }

  for (const query of queries) {
    const [row1, col1, row2, col2] = query.map((v) => v - 1);
    const temp = matrix[row1][col1];
    let min = temp;

    // 왼쪽
    for (let r = row1; r < row2; r++) {
      matrix[r][col1] = matrix[r + 1][col1];
      min = Math.min(min, matrix[r][col1]);
    }

    // 밑쪽
    for (let c = col1; c < col2; c++) {
      matrix[row2][c] = matrix[row2][c + 1];
      min = Math.min(min, matrix[row2][c]);
    }

    // 오른쪽
    for (let r = row2; r > row1; r--) {
      matrix[r][col2] = matrix[r - 1][col2];
      min = Math.min(min, matrix[r][col2]);
    }

    // 위쪽
    for (let c = col2; c > col1; c--) {
      matrix[row1][c] = matrix[row1][c - 1];
      min = Math.min(min, matrix[row1][c]);
    }

    matrix[row1][col1 + 1] = temp;
    answer.push(min);
  }

  return answer;
}
