import sys

N = int(input())
nums = list(map(int, input().split()))
operators_num = list(map(int, input().split()))

operators = []

for i in range(4):
  if i == 0:
    operators.extend(['+'] * operators_num[i])
  elif i == 1:
    operators.extend(['-'] * operators_num[i])
  elif i == 2:
    operators.extend(['*'] * operators_num[i])
  elif i == 3:
    operators.extend(['/'] * operators_num[i])

operators_len = len(operators)

# def calculate(_operators):
#   result = nums[0]
#   for e, o in enumerate(_operators):
#     if o == '+':
#       result += nums[e + 1]
#     elif o == '-':
#       result -= nums[e + 1]
#     elif o == '*':
#       result *= nums[e + 1]
#     elif o == '/':
#       if result < 0:
#         result = -result
#         result //= nums[e + 1]
#         result = -result
#       else:
#         result //= nums[e + 1]
#   return result

def calculate(total, o, e):
  if o == '+':
    total += nums[e]
  elif o == '-':
    total -= nums[e]
  elif o == '*':
    total *= nums[e]
  elif o == '/':
    if total < 0:
      total = -total
      total //= nums[e]
      total = -total
    else:
      total //= nums[e]
  return total
  
min_num = sys.maxsize
max_num = -sys.maxsize + 1

res = []
visited = [False] * operators_len

def dfs(c, total):
  global min_num, max_num
  if c == operators_len:
    # value = calculate(res)
    if min_num > total:
      min_num = total
    if max_num < total:
      max_num = total
    return
  
  for i in range(operators_len):
    if visited[i]:
      continue
    visited[i] = True

    dfs(c + 1, calculate(total, operators[i], c + 1))
    visited[i] = False

dfs(0, nums[0])

print(max_num)
print(min_num)