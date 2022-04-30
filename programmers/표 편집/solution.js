function solution(n, k, cmd) {
  function Node(index, prevNode) {
    this.index = index;
    this.prev = prevNode;
    this.next = null;
  }

  let prevNode = new Node(0, null);
  let cursor = prevNode;
  for (let i = 1; i < n; i++) {
    const newNode = new Node(i, prevNode);
    prevNode.next = newNode;
    prevNode = newNode;
    if (i === k) cursor = newNode;
  }

  const delList = [];
  for (const line of cmd) {
    // line.split('')으로 틀림
    let [kind, num] = line.split(' ');
    num = Number(num);

    if (kind === 'U') {
      for (let i = 0; i < num; i++) {
        if (!cursor.prev) break;
        cursor = cursor.prev;
      }
    }

    if (kind === 'D') {
      for (let i = 0; i < num; i++) {
        if (!cursor.next) break;
        cursor = cursor.next;
      }
    }

    if (kind === 'C') {
      const next = cursor.next;
      const prev = cursor.prev;
      delList.push(cursor);

      if (next) next.prev = prev;
      if (prev) prev.next = next;

      cursor = next ? next : prev;
    }

    if (kind === 'Z') {
      const delNode = delList.pop();
      const next = delNode.next;
      const prev = delNode.prev;

      if (next) next.prev = delNode;
      if (prev) prev.next = delNode;
    }
  }

  let answer = new Array(n).fill('O');
  for (const delNode of delList) {
    answer[delNode.index] = 'X';
  }

  return answer.join('');
}
