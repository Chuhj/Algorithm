import heapq
import sys

heap = []
for i in range(int(sys.stdin.readline())):
  n = int(sys.stdin.readline())
  if n != 0:
    heapq.heappush(heap, (abs(n), n))
  if n == 0:
    if len(heap) >= 1:
      print(heapq.heappop(heap)[1])
    else:
      print(0)