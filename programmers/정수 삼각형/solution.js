function solution(triangle) {
  // dp[i][j] = max(dp[i - 1][j] + array[i][j], dp[i - 1][j - 1] + array[i][j])
  const dp = [[], []];

  dp[0][0] = triangle[0][0];
  dp[1][0] = triangle[0][0] + triangle[1][0];
  dp[1][1] = triangle[0][0] + triangle[1][1];

  for (let i = 2; i < triangle.length; i++) {
    dp.push([]);
    for (let j = 0; j < triangle[i].length; j++) {
      if (j === 0) {
        dp[i][j] = dp[i - 1][j] + triangle[i][j];
      } else if (j === triangle[i].length - 1) {
        dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j] + triangle[i][j], dp[i - 1][j - 1] + triangle[i][j]);
      }
    }
  }

  return Math.max(...dp[dp.length - 1]);
}
