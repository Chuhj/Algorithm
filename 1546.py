n = int(input())
s = list(map(int, input().split()))

result = (sum(s)*100)/(max(s)*n)

print(result)