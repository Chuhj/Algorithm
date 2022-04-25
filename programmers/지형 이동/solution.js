function solution(land, height) {
  let answer = 0;
  const rowLength = land.length;
  const columnLength = land[0].length;

  const dy = [1, -1, 0, 0];
  const dx = [0, 0, 1, -1];
  let area = new Array(land.length).fill().map((v) => new Array(land[0].length).fill(false));
  let areaNum = 0;

  for (let y = 0; y < rowLength; y++) {
    for (let x = 0; x < columnLength; x++) {
      if (area[y][x]) continue;
      else areaNum++;

      const queue = [[y, x]];
      while (queue.length > 0) {
        const [curY, curX] = queue.shift();
        area[curY][curX] = areaNum;
        for (let i = 0; i < 4; i++) {
          const nextY = curY + dy[i];
          const nextX = curX + dx[i];

          if (nextY < 0 || nextX < 0 || nextY >= rowLength || nextX >= columnLength || area[nextY][nextX] || Math.abs(land[nextY][nextX] - land[curY][curX]) > height) continue;
          area[nextY][nextX] = areaNum; // 이 부분 놓침
          queue.push([nextY, nextX]);
        }
      }
    }
  }

  const ladders = [];

  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < columnLength; j++) {
      if (area[i][j + 1] && area[i][j] !== area[i][j + 1]) {
        ladders.push([Math.abs(land[i][j] - land[i][j + 1]), area[i][j], area[i][j + 1]]);
      }
      if (area[i + 1] && area[i][j] !== area[i + 1][j]) {
        ladders.push([Math.abs(land[i][j] - land[i + 1][j]), area[i][j], area[i + 1][j]]);
      }
    }
  }

  ladders.sort((a, b) => a[0] - b[0]);

  const areas = new Array(areaNum).fill().map((v, i) => i + 1);
  let parent = {};
  let rank = {};

  function makeSet(vertice) {
    parent[vertice] = vertice;
    rank[vertice] = 0;
  }

  function find(vertice) {
    return parent[vertice] === vertice ? vertice : find(parent[vertice]);
  }

  function union(a, b) {
    const root1 = find(a);
    const root2 = find(b);

    if (rank[root1] > rank[root2]) {
      parent[root2] = root1;
    } else {
      parent[root1] = root2;
    }
    if (rank[root1] === rank[root2]) {
      rank[root2]++;
    }
  }

  for (const cell of areas) {
    makeSet(cell);
  }

  for (const ladder of ladders) {
    const [cost, a, b] = ladder;

    if (find(a) !== find(b)) {
      union(a, b);
      answer += cost;
    }
  }

  return answer;
}
