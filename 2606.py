n = int(input())
computers = [[] for _ in range(n + 1)]

for _ in range(int(input())):
  i, j = map(int, input().split())
  computers[i].append(j)
  computers[j].append(i)

def dfs(start, visited):
  if visited[start]:
    return

  visited[start] = 1
  
  for i in computers[start]:
    dfs(i, visited)

visited = [0] * (n + 1)

dfs(1, visited)

answer = sum(visited) - 1 # visited에는 1번 컴퓨터도 포함돼있으므로 1 뺴줌
print(answer)