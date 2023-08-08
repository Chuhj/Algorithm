function solution(survey, choices) {
  let answer = '';
  
  const result = {
    'R': 0,
    'T': 0,
      'C': 0,
      'F': 0,
      'J': 0,
      'M': 0,
      'A': 0,
      'N': 0,
    };
    
    const types = ['RT', 'CF', 'JM', 'AN'];
    const MID = 4;
    
  const choice = (num) => {
      if (num === 1 || num === 7) return 3;
      if (num === 2 || num === 6) return 2;
      if (num === 3 || num === 5) return 1;
      return 0;
  }
  
  for (let i = 0; i < survey.length; i++) {
      const [disagree, agree] = survey[i];
      const score = choice(choices[i]);

      if (choices[i] < MID) {
          // 비동의
          result[disagree] += score;
      } else if (choices[i] > MID) {
          // 동의
          result[agree] += score;
      }
  }

  for (const [a, b] of types) {
      answer += result[a] >= result[b] ? a : b;
  }
  
  return answer;
}