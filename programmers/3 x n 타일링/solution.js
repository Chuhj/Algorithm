function solution(n) {
  let dp = [3, 11, 41];
  for (let i = 3; i <= Number(n / 2); i++) {
    dp[i] = dp[i - 1] * 3;
    for (let j = i - 2; j >= 0; j--) {
      dp[i] += dp[j] * 2;
    }
    dp[i] += 2;
    dp[i] = dp[i] % 1000000007;
  }

  if (n % 2 === 1) return 0;
  return dp[n / 2 - 1];
}
