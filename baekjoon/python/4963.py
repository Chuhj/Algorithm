import sys
sys.setrecursionlimit(10**6)

def dfs(graph, y, x):
  if y < 0 or y >= h or x < 0 or x >= w:
    return False

  if graph[y][x] == 1:
    graph[y][x] = 0

    dfs(graph, y-1, x)
    dfs(graph ,y+1, x)
    dfs(graph, y, x-1)
    dfs(graph, y, x+1)
    dfs(graph, y-1, x-1)
    dfs(graph, y-1, x+1)
    dfs(graph, y+1, x-1)
    dfs(graph, y+1, x+1)
    return True

  if graph[y][x] == 0:
    return False

while True:
  w, h = map(int, input().split())

  if w == 0 and h == 0:
    break

  graph = []
  
  for i in range(h):
    graph.append(list(map(int, input().split())))

  result = 0

  for i in range(h):
    for j in range(w):
      if dfs(graph, i,j) == True:
        result += 1

  print(result)