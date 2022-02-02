function solution(id_list, report, k) {
  let answer = [];

  let reported = report.reduce((prev, cur) => {
    const [a, b] = cur.split(' ');

    if (!prev[b]) {
      prev[b] = new Set();
    }

    prev[b].add(a);
    return prev;
  }, {});

  let mailedList = [];

  for (let key in reported) {
    if (reported[key].size >= k) {
      mailedList = [...mailedList, ...reported[key]];
    }
  }

  id_list.forEach((id) => {
    let count = mailedList.filter((m) => m === id).length;
    answer.push(count);
  });

  return answer;
}
