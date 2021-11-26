function solution(number, k) {
  let answer = '';
  const totalLength = number.length - k;
  
  let index = k;
  let maxIndex = -1;
  
  for (let i = 0; i < totalLength; i++) {
      let left = number.substr(maxIndex + 1, index - maxIndex);
      let right = number.substr(index + 1);
      let max = 0;
      
      for (let j = 9; j > 0; j--) {
          if (left.indexOf(j) === -1) continue;
          max = j;
          break;
      }
      
      answer += max;
      
      maxIndex = left.indexOf(max) + maxIndex + 1;
      if (maxIndex === index) {
          answer += right;
          break;
      }
      index += 1
  }
  
  return answer;
}