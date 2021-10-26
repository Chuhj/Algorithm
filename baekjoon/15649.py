N, M = map(int, input().split())

visited = [False] * (N + 1)

p = []

def dfs(count):
  if count == M:
    print(*p)
  
  for i in range(1, N + 1):
    if visited[i]:
      continue
    visited[i] = True
    p.append(i)
    dfs(count + 1)
    p.pop()
    visited[i] = False

dfs(0)