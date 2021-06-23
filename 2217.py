n = int(input())
inp = []

for i in range(n):
  inp.append(int(input()))

inp.sort(reverse=True)

ans = 0
for i in range(n):
  if ans < inp[i]*(i+1):
    ans = inp[i]*(i+1)

print(ans)