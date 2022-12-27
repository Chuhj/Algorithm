array = []

for i in range(19):
  array.append(list(map(int, input().split())))

dy = [0, 1, 1, 1]
dx = [1, 1, 0, -1]

def solution():
  for i in range(19):
    for j in range(19):
      if array[i][j] == 1 or array[i][j] == 2:
        current = array[i][j]
        # 4방향에 대해 체크
        for y, x in zip(dy, dx):  
          ty = i + y
          tx = j + x
          if ty < 0 or tx < 0 or ty > 18 or tx > 18:
            continue
          for k in range(4):
            if ty < 0 or tx < 0 or ty > 18 or tx > 18 or current != array[ty][tx]:
              break
            
            # 육목 체크
            if k == 3:
              if 0 <= ty + y < 19 and 0 <= tx + x < 19 and array[ty + y][tx + x] == current:
                break  
              elif 0 <= i - y < 19 and 0 <= j - x < 19 and array[i - y][j - x] == current:
                break
              else:
                if y == 1 and x == -1:
                  return ty + 1, tx + 1, current
                return i + 1, j + 1, current

            ty += y
            tx += x
  return 0, 0, 0

y, x, win = solution()

if not win:
  print(0)
else:
  print(win)
  print(y, x)