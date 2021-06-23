n, m = map(int, input().split())
a = list(map(int, input().split()))

ans = 0

for i in range(n-2):
    for j in range(i+1, n-1):
        for k in range(j+1, n):
            if max(ans, a[i]+a[j]+a[k]) <= m:
                ans = max(ans, a[i]+a[j]+a[k])

print(ans)
