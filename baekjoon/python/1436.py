N = int(input())

count = 0
number = 0

while count < N:
  if str(number).find('666') != -1:
    count += 1
    if count == N:
      print(number)
      break
  number += 1