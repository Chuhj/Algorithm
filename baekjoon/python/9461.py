t = int(input())

tc = []
for i in range(t):
  tc.append(int(input()))

arr = [1, 1, 1, 2, 2]
for i in range(max(tc) - 5):
  arr.append(arr[i] + arr[i + 4])

for e in tc:
  print(arr[e - 1])