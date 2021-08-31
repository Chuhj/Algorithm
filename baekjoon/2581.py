def decimal(n):
  for i in range(2, n):
    if n % i == 0:
      return False
  if n == 1:
    return False
  return True

m = int(input())
n = int(input())

total = 0
min_decimal = 10001

for i in range(m, n + 1):
  if(decimal(i)):
    total += i
    if min_decimal > i:
      min_decimal = i

if(total == 0):
  print(-1)
else:
  print(total)
  print(min_decimal)

# 1을 소수에 포함시켜 틀림