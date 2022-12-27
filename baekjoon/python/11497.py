n = int(input())

for i in range(n):
  length = int(input())
  li = list(map(int, input().split()))
  li.sort(reverse=True)

  result = []
  for j in range(length):
    if j % 2 == 0:
      result.append(li[j])
    else:
      result.insert(0, li[j])

  diff = 0
  for k in range(1, length):
    if diff < abs(result[k] - result[k-1]):
      diff = abs(result[k] - result[k-1])

  print(diff)