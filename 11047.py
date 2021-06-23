n, k = map(int, input().split())

li = []

for i in range(n):
    li.append(int(input()))

li.sort(reverse=True)

ans = 0

for i in li:
    if k // i >= 1:
        ans += k // i
        k = k % i
        if k == 0:
            break

print(ans)