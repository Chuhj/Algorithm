for _ in range(int(input())):
  s = input().split()

  for i in s:
    print(f'{i[::-1]}', end=' ')
    
  print('')