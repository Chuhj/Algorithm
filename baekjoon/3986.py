n = int(input())
array = [input() for _ in range(n)]
ans = 0

for s in array:
  while s:
    s = s.replace('AA', '')
    prev = s
    s = s.replace('BB', '')

    if prev == s:
      break

  if not s:
    ans += 1

print(ans)
