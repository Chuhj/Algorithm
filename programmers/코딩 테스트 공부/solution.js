function solution(alp, cop, problems) {
  let targetAlp = alp;
  let targetCop = cop;

  for (const [alp, cop] of problems) {
    targetAlp = Math.max(targetAlp, alp);
    targetCop = Math.max(targetCop, cop);
  }

  const dp = Array(targetAlp + 1)
    .fill(undefined)
    .map(() => Array(targetCop + 1).fill(Infinity));
  dp[alp][cop] = 0;

  for (let a = alp; a < targetAlp + 1; a++) {
    for (let c = cop; c < targetCop + 1; c++) {
      if (a + 1 <= targetAlp) {
        dp[a + 1][c] = Math.min(dp[a + 1][c], dp[a][c] + 1);
      }
      if (c + 1 <= targetCop) {
        dp[a][c + 1] = Math.min(dp[a][c + 1], dp[a][c] + 1);
      }

      for (const [alpReq, copReq, alpRwd, copRwd, cost] of problems) {
        if (a >= alpReq && c >= copReq) {
          const nextAlp = a + alpRwd >= targetAlp ? targetAlp : a + alpRwd;
          const nextCop = c + copRwd >= targetCop ? targetCop : c + copRwd;
          if (a + alpRwd > targetAlp && a + alpRwd - targetAlp < cost && copRwd === 0) continue;
          if (c + copRwd > targetCop && c + copRwd - targetCop < cost && alpRwd === 0) continue;

          dp[nextAlp][nextCop] = Math.min(dp[nextAlp][nextCop], dp[a][c] + cost);
        }
      }
    }
  }

  return dp.at(-1).at(-1);
}
