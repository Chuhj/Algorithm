t = int(input())
for _ in range(t):
  zero = [1, 0]
  one = [0, 1]
  n = int(input())
  for i in range(2, n + 1):
    zero.append(zero[i - 2] + zero[i - 1])
    one.append(one[i - 2] + one[i - 1])
  if n == 0:
    print(zero[0], one[0])
  else:
    print(zero[-1], one[-1])
