n = int(input())
road = list(map(int, input().split()))
prices = list(map(int, input().split()))

# 도시의 기름값으로 최소의 기름만 구입
# 지나온 도시의 기름가격을 기억해놓고 
# 더 비싼 도시가 나온다면 지나온 도시의 가격 사용
# 더 싼 도시가 나오면 그 도시의 가격 사용
ans = 0
prev = 1000000001

for r, price in zip(road, prices):
  if price < prev:
    ans += r * price
    prev = price
  else:
    ans += r * prev
  
print(ans)