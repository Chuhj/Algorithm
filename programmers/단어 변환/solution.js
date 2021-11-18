function solution(begin, target, words) {
  let answer = 100;
  let visited = Array(words.length).fill(false);
  
  function isDifferOne(word, compare) {
      // word에서 compare로 한 글자만 변환하는지 확인
      let differNum = 0;
      for (let i = 0; i < word.length; i++) {
          if (word[i] !== compare[i]) {
              if (differNum) {
                  return false;
              }
              differNum += 1;
          }
      }
      return true;
  }
  
  function dfs(n, index) {
      if (words[index] === target) {
          // 변환한 단어가 타겟과 같으면 n이 최소값인지 확인
          if (n < answer) answer = n;
          return;
      }
      if (visited[index]) return;
  
      visited[index] = true;

      for (let i = 0; i < words.length; i++) {
          if (index === i) continue;

          if (index === -1) {
              if (isDifferOne(begin, words[i])) {
                  dfs(n + 1, i);
              }
          } else if (isDifferOne(words[index], words[i])) {
              dfs(n + 1, i);
          }
      }
  }
  
  dfs(0, -1); 

  return (answer === 100) ? 0 : answer;
}