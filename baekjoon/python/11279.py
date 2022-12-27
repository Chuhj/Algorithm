from heapq import heappush, heappop
import sys
li = []

for i in range(int(input())):
  inp = int(sys.stdin.readline())
  if inp != 0:
    heappush(li, (-inp, inp))
  elif inp == 0:
    if len(li) >= 1:
      print(heappop(li)[1])
    else:
      print(0)

