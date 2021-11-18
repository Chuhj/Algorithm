function solution(tickets) {
  let answer = [];
  let visited = Array(tickets.length).fill(false);

  tickets.sort();
    
  function dfs(count, port) {
    answer.push(port);

    if (count === tickets.length) {
      return true;
    }

    for (let i = 0; i < tickets.length; i++) {
      if (visited[i] || tickets[i][0] !== port) continue;
      visited[i] = true;
      if (dfs(count + 1, tickets[i][1])) {
        return true;
      }
      visited[i] = false;
    }

    answer.pop();
    return false;
  }

  dfs(0, 'ICN');

  return answer;
}