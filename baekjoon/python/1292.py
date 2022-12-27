step = 0
array = []
for i in range(1, 46):
  step += i
  array.append(step)

result = 0

a, b = map(int, input().split())

for i in range(a, b + 1):
  if i == 1:
    result += 1
  for e, j in enumerate(array):
    if j < i and i <= array[e + 1]:
      result += e + 2

print(result)