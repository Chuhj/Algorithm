def eureka(n):
  ans = 0
  sub = 0
  
  for i in range(1, 50):
    Ti = i * (i + 1) / 2
    for j in range(1, 50):
      Tj = j * (j + 1) / 2
      for k in range(1, 50):
        Tk = k * (k + 1) / 2
        sub = n - Tk - Tj - Ti
        if sub == 0:
          ans = 1
          return ans
  return ans

n = int(input())

for _ in range(n):
  result = eureka(int(input()))
  print(result)
