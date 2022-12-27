num = 0
max_num = 0
for _ in range(10):
  minus, plus = map(int, input().split())

  if num > 0:
    num -= minus
  num += plus
  
  if num > max_num:
    max_num = num

print(max_num)