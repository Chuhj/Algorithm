from collections import deque

n, m, v = map(int, input().split())
graph = [[]]
for i in range(n):
  graph.append([])

for i in range(m):
  a, b = map(int,input().split())
  graph[a].append(b)
  graph[b].append(a)

graph = [sorted(g) for g in graph]
visited = [False] * (n+1)

def dfs(v, visited):
  visited[v] = True
  print(v, end=' ')
  for i in graph[v]:
    if visited[i] == False:
      dfs(i, visited)

def bfs(v, visited):
  q = deque([v])
  while q:
    node = q.popleft()
    visited[node] = True
    print(node, end=' ')
    for i in graph[node]:
      if visited[i] == False:
        visited[i] = True
        q.append(i)
        

dfs(v, visited)
visited = [False] * (n+1)
print('')
bfs(v, visited)
