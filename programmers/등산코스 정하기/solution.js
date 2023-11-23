function solution(n, paths, gates, summits) {
  var answer = [Infinity, Infinity];
  const adj = Array(n + 1)
    .fill()
    .map(() => []);
  const intensity = Array(n + 1).fill(Infinity);
  const visited = Array(n + 1).fill(false);
  const summitObj = {};
  visited[0] = true;
  summits.sort();

  for (const [from, to, weight] of paths) {
    adj[from].push([to, weight]);
    adj[to].push([from, weight]);
  }

  for (const summit of summits) {
    summitObj[summit] = true;
  }

  const heap = new MinHeap();

  for (const gate of gates) {
    intensity[gate] = 0;
    visited[gate] = true;
    heap.insert([gate, 0]);
  }

  while (heap.size() > 0) {
    const [node, weight] = heap.remove();
    visited[node] = true;

    if (intensity[node] < weight) continue;
    if (summitObj[node]) continue;

    for (const [nextNode, nextWeight] of adj[node]) {
      if (visited[nextNode]) continue;
      if (Math.max(intensity[node], nextWeight) < intensity[nextNode]) {
        intensity[nextNode] = Math.max(intensity[node], nextWeight);
        heap.insert([nextNode, Math.max(intensity[node], nextWeight)]);
      }
    }
  }

  for (let i = 1; i < n + 1; i++) {
    if (intensity[i] < answer[1] && summitObj[i]) {
      answer[1] = intensity[i];
      answer[0] = i;
    }
  }

  return answer;
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let current = this.heap.length - 1;

    while (current > 0 && this.heap[current][1] < this.heap[Math.floor((current - 1) / 2)][1]) {
      this.swap(current, Math.floor((current - 1) / 2));
      current = Math.floor((current - 1) / 2);
    }
  }

  remove() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min;
  }

  heapifyDown() {
    let current = 0;
    let left = current * 2 + 1;
    let right = current * 2 + 2;

    while ((this.heap[left] && this.heap[left][1] < this.heap[current][1]) || (this.heap[right] && this.heap[right][1] < this.heap[current][1])) {
      let smaller = left;
      if (this.heap[right] && this.heap[right][1] < this.heap[smaller][1]) {
        smaller = right;
      }

      this.swap(current, smaller);
      current = smaller;
      left = current * 2 + 1;
      right = current * 2 + 2;
    }
  }
}
