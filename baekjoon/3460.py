for _ in range(int(input())):
  n = int(input())
  i = 0
  while n > 0:
    if n % 2 == 1:
      print(i, end=' ')
    n = n // 2
    i += 1
  print('')