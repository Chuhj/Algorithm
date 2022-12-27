H, W = map(int, input().split())
array = list(map(int, input().split()))

result = 0

for i in range(1, W - 1):
  left_max = max(array[:i])
  right_max = max(array[i + 1:])

  min_block = min(left_max, right_max)

  if array[i] < min_block:
    result += min_block - array[i]

print(result)