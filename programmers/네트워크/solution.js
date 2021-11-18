function solution(n, computers) {
  let answer = 0;
  let visited = Array(n).fill(false);
  
  function dfs(start) {
      if (visited[start]) {
          return false;
      }
      visited[start] = true;
      for (let i = 0; i < n; i++) {
          if (computers[start][i] === 1) {
              dfs(i);
          }
      }
      return true;
  }
  
  for (let i = 0; i < n; i++) {
      if (dfs(i)) {
          answer += 1;
      }
  }
  
  return answer;
}
