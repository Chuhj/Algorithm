n = int(input())

ans = 0
sum = 0

i = 1
while(i <= n):
    sum = i
    li = list(map(int, list(str(i))))

    for item in li:
        sum += item

    if n == sum:
        ans = i
        break

    i += 1
    
print(ans)