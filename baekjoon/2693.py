for _ in range(int(input())):
  array = list(map(int, input().split()))
  array.sort(reverse=True)
  print(array[2])