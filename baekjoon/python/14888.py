from itertools import permutations
import sys

def caculate(arr, symbol):
  result = arr[0]
  for e, s in enumerate(symbol):
    if s == '+':
      result += arr[e + 1]
    elif s == '-':
      result -= arr[e + 1]
    elif s == '*':
      result *= arr[e + 1]
    elif s == '/':
      if result < 0:
        result = -result
        result //= arr[e + 1]
        result = -result
      else:
        result //= arr[e + 1]
  return result

n = int(sys.stdin.readline())
arr = list(map(int, sys.stdin.readline().split()))
symbols_num = list(map(int, sys.stdin.readline().split()))

symbols = []

for i in range(4):
  if i == 0:
    symbols += ['+'] * symbols_num[i]
  elif i == 1:
    symbols += ['-'] * symbols_num[i]
  elif i == 2:
    symbols += ['*'] * symbols_num[i]
  elif i == 3:
    symbols += ['/'] * symbols_num[i]

max_num = -sys.maxsize - 1
min_num = sys.maxsize

for p in permutations(symbols, n - 1):
  result = caculate(arr, p)
  if result > max_num:
    max_num = result
  if result < min_num:
    min_num = result

print(max_num)
print(min_num)

# pypy로 통과. python은 시간초과
# dfs로 풀면 시간 줄일 수 있을듯