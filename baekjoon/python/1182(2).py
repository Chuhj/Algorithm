N, S = map(int, input().split())
array = list(map(int, input().split()))

ans = 0

def dfs(count, total):
  global ans
  if count == N:
    return
  
  if S == total + array[count]:
    ans += 1

  dfs(count + 1, total)
  dfs(count + 1, total + array[count])

dfs(0, 0)

print(ans)