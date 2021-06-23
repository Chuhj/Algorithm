from itertools import combinations

n, s = map(int, input().split())
li = list(map(int, input().split()))

result = 0

for i in range(1, n+1):
  for c in list(combinations(li, i)):
    print(c)
    if sum(c) == s:
      result += 1

print(result)