function solution(record) {
  let answer = [];
  let uidName = {};
  let message = ['님이 들어왔습니다.', '님이 나갔습니다.'];

  for (let i = 0; i < record.length; i++) {
    const [behavior, uid, name] = record[i].split(' ');
    if (behavior === 'Leave') continue;
    uidName[uid] = name;
  }

  for (let i = 0; i < record.length; i++) {
    const [behavior, uid, _] = record[i].split(' ');

    if (behavior === 'Change') continue;
    if (behavior === 'Enter') answer.push(uidName[uid] + message[0]);
    if (behavior === 'Leave') answer.push(uidName[uid] + message[1]);
  }

  return answer;
}
