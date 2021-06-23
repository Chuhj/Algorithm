from collections import deque

m, n = map(int , input().split())

graph = []
tomato = []

for i in range(n):
  row = list(map(int, input().split()))
  for e,j in enumerate(row):
    if j == 1:
      tomato.append([i, e])
  graph.append(row)

dy = [1, -1, 0, 0]
dx = [0, 0, 1, -1]

def dfs():
  q = deque()

  for i in tomato:
    q.append((i[0], i[1]))

  while q:
    y, x = q.popleft()

    for i in range(4):
      my = y + dy[i]
      mx = x + dx[i]
      if my < 0 or my >= n or mx < 0 or mx >= m:
        continue
      if graph[my][mx] == 1:
        continue
      if graph[my][mx] == -1:
        continue
      if graph[my][mx] == 0:
        q.append((my, mx))
        graph[my][mx] = graph[y][x] + 1

  for i in graph:
    if 0 in i:
      return -1
      
  return max(map(max, graph))-1

result = dfs()

print(result)