function solution(w, h) {
  // 규칙에서 gcd를 어떻게 발견하나..
  const gcd = getGCD(w, h);
  const result = w * h - (w / gcd + h / gcd - 1) * gcd;
  return result;
}

function getGCD(a, b) {
  if (b === 0) return a;
  return getGCD(b, a % b);
}
