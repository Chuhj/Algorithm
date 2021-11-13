function solution(numbers) {
  var answer = 0;
  const permutation = [];
  const set = new Set(); // 중복 제거하기 위해 집합사용
  const visited = Array(numbers.length).fill(false);

  function dfs(count, limit) {
    // 모든 순열
    if (count === limit) {
      const num = parseInt(permutation.reduce((p, c) => p + c));
      if (isPrime(num)) {
        // 소수라면 집합에 더해줌
        set.add(num);
      }
      return;
    }

    for (let i = 0; i < numbers.length; i++) {
      if (visited[i]) {
        continue;
      }
      permutation.push(numbers[i]);
      visited[i] = true;
      dfs(count + 1, limit);
      visited[i] = false;
      permutation.pop();
    }
  }

  for (let i = 1; i < numbers.length + 1; i++) {
    dfs(0, i);
  }

  answer = set.size;

  return answer;
}

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
