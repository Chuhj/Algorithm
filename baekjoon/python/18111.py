import sys
from collections import Counter
N, M, B = map(int, input().split())

def get_time(height):
  time = 0
  
  for e in land:
    if e < height:
      time += land[e] * (height - e)
    elif e > height:
      time += 2 * land[e] * (e - height)
  
  return time

land = []
for _ in range(N):
  land.extend(map(int, input().split()))

sum_land = sum(land)

min_time = sys.maxsize
height = 0
land = dict(Counter(land))

for i in range(257):
  # 내가 가진 모든 블럭이 높이를 맞춘 모든 블럭의 수보다 크거나 같을때만 체크
  if N * M * i <= sum_land + B:
    # i 높이를 맞추는데 걸리는 시간을 구하고 최소 시간으로 갱신
    time = get_time(i)
    if time <= min_time:
      min_time = time 
      height = i
  else:
    break

print(min_time, height)
