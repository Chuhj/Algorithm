N, M = map(int, input().split())

p = []

def dfs(count):
  if count == M:
    print(*p)
    return

  for i in range(1, N + 1):
    if p and p[-1] >= i:
      continue

    p.append(i)
    dfs(count + 1)
    p.pop()


dfs(0)