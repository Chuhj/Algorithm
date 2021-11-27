function solution(people, limit) {
  let answer = 0;
  
  people.sort((a, b) => a - b);
  
  let lp = 0;
  let rp = people.length - 1;
  
  while(lp <= rp) {
      if (lp === rp) {
          answer += 1;
          break;
      }
      
      if (people[lp] + people[rp] <= limit) {
          lp += 1;
          rp -= 1;
      } else if (people[lp] + people[rp] > limit) {
          rp -= 1;
      }
      
      answer += 1;
  }
  
  return answer;
}