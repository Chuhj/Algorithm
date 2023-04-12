const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const s = input[0].trim();
const size = s.length < 10 ? s.length : 9 + (s.length - 9) / 2;
const visited = Array(size + 1).fill(false);

dfs(0, []);

function dfs(index, array) {
  const allVisited = visited.every((v, i) => (i === 0 ? true : v));
  if (array.length === size && allVisited) {
    // 순열의 길이가 다 채워졌고 모두 방문했으면 끝?
    console.log(array.join(' '));
    process.exit(0);
  }

  // 1자리 수
  if (index < s.length) {
    const num1 = Number(s[index]);

    if (!visited[num1]) {
      visited[num1] = true;
      array.push(num1);
      dfs(index + 1, array);
      visited[num1] = false;
      array.pop();
    }
  }

  // 2자리 수
  if (index + 1 < s.length) {
    const num2 = Number(s.slice(index, index + 2));

    if (num2 <= size && !visited[num2]) {
      visited[num2] = true;
      array.push(num2);
      dfs(index + 2, array);
      visited[num2] = false;
      array.pop();
    }
  }
}
