from collections import deque

visited = set()

def bfs(start, k):
  q = deque([(start, 0)])
  while q:
    v, d = q.popleft()
    if v == k:
      return d
    m = [v + 1, v - 1, v * 2]
    for i in range(3):
      v = m[i]
      if v < 0 or v in visited or v > 100000:
        continue
      visited.add(v)
      q.append((v, d + 1))
  return

n, k = map(int, input().split())
print(bfs(n, k))
