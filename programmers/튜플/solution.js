function solution(s) {
  const sets = s
    .slice(2, s.length - 2)
    .split('},{')
    .map((v) => v.split(',').map((str) => Number(str)))
    .sort((a, b) => a.length - b.length); // 문자열 배열로 변환

  const answer = sets.reduce((array, set) => {
    set = set.filter((v) => !array.includes(v)); // set - array
    return [...array, ...set];
  }, []);

  return answer;
}
