function solution(land) {
  // 반복문 하나로 줄이고 set 사용으로 통과
  let answer = 0;

  const n = land.length;
  const m = land[0].length;
  const MIN_GROUP_NUM = 2;

  const size = {}; // 번호마다 크기를 기록할 객체

  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  let groupNum = MIN_GROUP_NUM;

  // 열마다 행을 내려가면서 bfs를 돌고 만나는 그룹의 크기를 모두 더함
  for (let col = 0; col < m; col++) {
    let sum = 0;
    const set = new Set();

    for (let row = 0; row < n; row++) {
      if (land[row][col] === 1) {
        bfs(row, col);
      }
      const currentGroupNum = land[row][col];

      if (currentGroupNum < MIN_GROUP_NUM) continue;

      set.add(currentGroupNum);
    }

    for (const num of set) {
      sum += size[num];
    }

    answer = Math.max(answer, sum);
  }

  function bfs(row, col) {
    let oil = 0;

    const queue = new Queue();
    queue.enqueue([row, col]);

    while (queue.getSize() > 0) {
      const [y, x] = queue.dequeue();

      if (y < 0 || x < 0 || y >= n || x >= m || land[y][x] > 1 || land[y][x] === 0) {
        continue;
      }

      land[y][x] = groupNum;
      oil += 1;

      for (let i = 0; i < 4; i++) {
        const [my, mx] = [y + dy[i], x + dx[i]];

        if (my >= 0 && mx >= 0 && my < n && mx < m && land[my][mx] === 1) {
          queue.enqueue([my, mx]);
        }
      }
    }
    size[groupNum] = oil;
    groupNum += 1;

    return oil;
  }
  return answer;
}

class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
  }

  enqueue(item) {
    this.queue[this.tail] = item;
    this.tail += 1;
  }

  dequeue() {
    const item = this.queue[this.head];
    delete this.queue[this.head];
    this.head += 1;
    return item;
  }

  getSize() {
    return this.tail - this.head;
  }
}

function solution(land) {
  // 효율성 5번 시간초과
  let answer = 0;

  const n = land.length;
  const m = land[0].length;

  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  for (let i = 0; i < m; i++) {
    const currentOil = bfs(i);
    answer = currentOil > answer ? currentOil : answer;
  }

  function bfs(col) {
    let oil = 0;
    const visited = Array(n)
      .fill(undefined)
      .map(() => Array(m).fill(false));
    const queue = new Queue();
    for (let i = 0; i < n; i++) {
      queue.enqueue([i, col]);
    }

    while (queue.getSize() > 0) {
      const [y, x] = queue.dequeue();

      if (y < 0 || x < 0 || y >= n || x >= m || visited[y][x] || land[y][x] === 0) {
        continue;
      }

      visited[y][x] = true;
      oil += 1;

      for (let i = 0; i < 4; i++) {
        const [my, mx] = [y + dy[i], x + dx[i]];

        if (
          my >= 0 &&
          mx >= 0 &&
          my < n &&
          mx < m &&
          visited[my][mx] === false &&
          land[my][mx] === 1
        ) {
          queue.enqueue([my, mx]);
        }
      }
    }
    return oil;
  }
  return answer;
}

class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
  }

  enqueue(item) {
    this.queue[this.tail] = item;
    this.tail += 1;
  }

  dequeue() {
    const item = this.queue[this.head];
    delete this.queue[this.head];
    this.head += 1;
    return item;
  }

  getSize() {
    return this.tail - this.head;
  }
}
