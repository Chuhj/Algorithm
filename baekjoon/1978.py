import sys

_ = sys.stdin.readline()
array = list(map(int, sys.stdin.readline().split()))

result = 0

for n in array:
  if n == 2:
    result += 1
  for i in range(2, n):
    if n % i == 0:
      break
    elif i == n - 1:
      result += 1

print(result)