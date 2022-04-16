function solution(info, query) {
  let answer = [];
  const infoObj = {};

  info.forEach((person) => {
    // 지원자에 대한 모든 경우의 수를 key, value를 점수가 든 배열로 만들어 둠
    person = person.split(' ');
    for (const lang of [person[0], '-']) {
      for (const job of [person[1], '-']) {
        for (const career of [person[2], '-']) {
          for (const food of [person[3], '-']) {
            if (!infoObj[lang + job + career + food]) infoObj[lang + job + career + food] = [];
            infoObj[lang + job + career + food].push(parseInt(person[4]));
          }
        }
      }
    }
  });

  for (const key in infoObj) {
    infoObj[key].sort((a, b) => a - b);
  }

  for (const q of query) {
    let condition = q.split(' and ');
    condition = [...condition.slice(0, 3), ...condition[3].split(' ')];
    condition[4] = parseInt(condition[4]);

    const key = condition.slice(0, 4).join('');

    if (!infoObj[key]) {
      answer.push(0);
    } else {
      answer.push(getCount(infoObj[key], condition[4]));
    }
  }

  return answer;
}

function getCount(array, score) {
  let s = 0;
  let e = array.length;
  let m;

  while (e - s > 0) {
    m = Math.floor((s + e) / 2);
    if (array[m] < score) s = m + 1;
    else e = m;
  }

  return array.length - s;
}
