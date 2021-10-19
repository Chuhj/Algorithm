C, P = map(int, input().split())

field = list(map(int, input().split()))

ans = 0

if P == 1:
  # 모든 열에서 한번씩 가능
  ans += C
  for i in range(C - 3):
    # 눕힌상태에서 확인 0000
    if field[i] == field[i + 1] == field[i + 2] == field[i + 3]:
      ans += 1

elif P == 2:
  for i in range(C - 1):
    # 00
    if field[i] == field[i + 1]:
      ans += 1

elif P == 3:
  for i in range(C - 2):
    # 001
    if field[i] == field[i + 1] == field[i + 2] - 1:
      ans += 1
  for i in range(C - 1):
    # 10
    if field[i] - 1 == field[i + 1]:
      ans += 1

elif P == 4:
  for i in range(C - 2):
    # 100
    if field[i] - 1 == field[i + 1] == field[i + 2]:
      ans += 1
  for i in range(C - 1):
    # 01
    if field[i] == field[i + 1] - 1:
      ans += 1

elif P == 5:
  for i in range(C - 2):
    # 000, 101
    if field[i] == field[i + 1] == field[i + 2]:
      ans += 1
    elif field[i] - 1 == field[i + 1] == field[i + 2] - 1:
      ans += 1
  for i in range(C - 1):
    # 01, 10
    if field[i] == field[i + 1] - 1:
      ans += 1
    elif field[i] - 1 == field[i + 1]:
      ans += 1

elif P == 6:
  for i in range(C - 2):
    # 000, 011
    if field[i] == field[i + 1] == field[i + 2]:
      ans += 1
    elif field[i] == field[i + 1] - 1 == field[i + 2] - 1:
      ans += 1
  for i in range(C - 1):
    # 00, 20
    if field[i] == field[i + 1]:
      ans += 1
    elif field[i] - 2 == field[i + 1]:
      ans += 1

elif P == 7:
  for i in range(C - 2):
    # 000, 110
    if field[i] == field[i + 1] == field[i + 2]:
      ans += 1
    elif field[i] - 1 == field[i + 1] - 1 == field[i + 2]:
      ans += 1
  for i in range(C- 1):
    # 00, 02
    if field[i] == field[i + 1]:
      ans += 1
    elif field[i] == field[i + 1] - 2:
      ans += 1

print(ans)