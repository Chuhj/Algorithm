function solution(skill, skill_trees) {
  let answer = 0;
  skill = skill.split('');
  skill_trees = skill_trees.map((st) => st.split(''));

  const currentSkill = skill.reduce((obj, cur) => {
    obj[cur] = 0;
    return obj;
  }, {});

  for (const skillTree of skill_trees) {
    if (isAvailable({ ...currentSkill }, skillTree)) answer++;
  }

  return answer;
}

function isAvailable(currentSkill, skillTree) {
  for (const skill of skillTree) {
    if (Object.keys(currentSkill).includes(skill)) {
      for (const key in currentSkill) {
        if (key === skill) break;
        if (currentSkill[key] === 0) return false;
      }
      currentSkill[skill] = 1;
    }
  }
  return true;
}
