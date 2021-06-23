from collections import deque

for _ in range(int(input())):
  location = int(input().split()[1])
  documents = list(map(int, input().split()))

  q = deque([(v, i) for i, v in enumerate(documents)])

  result = 0

  while q:
    popped = q.popleft()
    if q and popped[0] < max(q)[0]:
      q.append(popped)
    else:
      result += 1
      if popped[1] == location:
        break

  print(result)