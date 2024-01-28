function solution(user_ids, banned_ids) {
  let answer = 0;
  const permutations = getPermutations(user_ids, banned_ids.length);
  const map = {};

  for (const userIds of permutations) {
    const userIdsKey = [...userIds].sort((a, b) => (a > b ? 1 : -1)).toString();
    if (isMatch(banned_ids, userIds) && !map[userIdsKey]) {
      answer += 1;
      map[userIdsKey] = true;
    }
  }
  return answer;
}

function isMatch(bannedIds, userIds) {
  for (let i = 0; i < userIds.length; i++) {
    if (!compare(bannedIds[i], userIds[i])) return false;
  }
  return true;
}

function compare(bannedId, userId) {
  if (bannedId.length !== userId.length) return false;

  for (let i = 0; i < bannedId.length; i++) {
    if (bannedId[i] === '*') continue;
    if (bannedId[i] !== userId[i]) return false;
  }
  return true;
}

function getPermutations(array, n) {
  const result = [];
  if (n === 1) return array.map((v) => [v]);

  array.forEach((item, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, n - 1);
    result.push(...permutations.map((permutation) => [item, ...permutation]));
  });

  return result;
}
