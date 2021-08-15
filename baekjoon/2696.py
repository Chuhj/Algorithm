import sys
import heapq

for i in range(int(sys.stdin.readline())):
  n = int(sys.stdin.readline())
  
  li = []
  for j in range(n // 10 + 1):
    inp = list(map(int, sys.stdin.readline().split()))
    li = li + inp

  max_heap = []
  min_heap = []
  result = []

  for e, element in enumerate(li):
    if not max_heap and not min_heap:
      heapq.heappush(max_heap, (-element, element))

    elif len(max_heap) > len(min_heap):
      if max_heap[0][1] > element:
        heapq.heappush(max_heap, (-element, element))
        pop = heapq.heappop(max_heap)[1]
        heapq.heappush(min_heap, pop)
      else:
        heapq.heappush(min_heap, element)

    elif len(max_heap) == len(min_heap):
      if max_heap[0][1] < element:
        heapq.heappush(min_heap, element)
        pop = heapq.heappop(min_heap)
        heapq.heappush(max_heap, (-pop, pop))
      else:
        heapq.heappush(max_heap, (-element, element))
    
    if e % 2 == 0:
      result.append(max_heap[0][1])
  
  print(len(result))
  for j in range(len(result)):
    if j % 10 == 9:
      print(result[j])
    else:
      print(result[j], end=' ')
