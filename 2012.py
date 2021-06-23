n = int(input())

li = []
for i in range(n):
  li.append(int(input()))

ans = 0

li = sorted(li)

for i in range(1, n):
  ans += abs(li[i-1] - i)

print(ans)