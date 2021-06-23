def dfs(y, x):
  if y < 0 or x < 0 or x >= m or y >= n:
    return False
  print(m,n)
  if graph[y][x] == 1:
    graph[y][x] = 0
    dfs(y + 1, x)
    dfs(y - 1, x)
    dfs(y, x + 1)
    dfs(y, x - 1)
    return True
  return False

t = int(input())

for l in range(t):
  m, n, k = map(int, input().split())
  graph = []
  for i in range(n):
    graph.append([0] * m)

  for i in range(k):
    x, y = map(int, input().split())
    graph[y][x] = 1

  ans = 0
  for i in range(8):
    for j in range(10):
      if dfs(i, j) == True:
        ans += 1

  print(ans)