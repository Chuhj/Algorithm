n = int(input())
k = int(input())
li = list(map(int, input().split()))
li.sort()

dist = []
for i in range(1, n): # 센서들 사이의 거리를 모두 구함
  dist.append(li[i] - li[i-1])

dist.sort(reverse=True) # 큰거부터 내림차순 정렬

result = 0
for i in range(len(dist)): # 거리가 큰 것을 없애야 집중국의 수신영역이 좁아짐.
                           # k-1개의 구멍을 뚫어야 k개로 나눠짐
  if i < k-1:
    continue
  result += dist[i]

print(result)