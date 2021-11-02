n = int(input())
arr = list(map(int, input().split()))

result = [0] * n
result[0] = arr[0]

for i in range(1, n):
  result[i] = max(result[i - 1] + arr[i], arr[i])
  
print(max(result))
