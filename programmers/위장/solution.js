function solution(clothes) {
  const object = {};

  clothes.forEach((v) => {
    if (!object[v[1]]) {
      object[v[1]] = [];
    }
    object[v[1]].push(v[0]);
  });

  let combination = 1;

  for (const v in object) {
    combination *= object[v].length + 1;
  }

  return combination - 1;
}
