tmp = [0, 1]
result = [0, 1]

for i in range(18):
  sum = tmp[0] + tmp[1]
  tmp[0] = tmp[1]
  tmp[1] = sum
  result.append(sum)

print(result[int(input())])