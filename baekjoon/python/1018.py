a = []
n, m = map(int, input().split())
for i in range(n):
  a.append(input())
c = ["BWBWBWBW", "WBWBWBWB"]
ans = 64
t = 0
il = 0
jl = 0
while n - jl >= 8:
  tmp = 0
  for j in range(jl, 8 + jl):
    line = 0
    for i in range(il, 8 + il):
      if c[t][i - il] != a[j][i]:
        line += 1
    tmp += line
    t = t - 1 if t == 1 else t + 1
  ans = min(ans, min(tmp, 64-tmp))
  il += 1
  if m - il < 8:
    jl += 1
    il = 0

print(ans)