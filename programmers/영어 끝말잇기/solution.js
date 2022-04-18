function solution(n, words) {
  let answer = [0, 0];
  let history = [];
  let current = {};

  // 사람별로 말한 단어들을 저장
  for (let i = 0; i < n; i++) {
    history[i] = [];
    for (let j = i; j < words.length; j = j + n) {
      history[i].push(words[j]);
    }
  }

  // 단어들 처음부터 순회
  let prev = words[0][0];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    // 이전 단어와 끝말잇기가 안되거나 한 번 나왔던 단어라면 중단
    if (prev[prev.length - 1] !== word[0] || current[word]) {
      answer = moddiv(i, n);
      break;
    }
    current[word] = true;
    prev = word;
  }
  return answer;
}

function moddiv(a, b) {
  const div = Math.floor(a / b);
  const mod = a % b;
  return [mod + 1, div + 1];
}
