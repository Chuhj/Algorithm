n = int(input())
ans = 0

while(n > 0):
    if n % 5 == 0:
        n -= 5
        ans += 1
    elif n % 3 == 0:
        n -= 3
        ans += 1
    elif n > 5:
        n -= 5
        ans += 1
    else:
        ans = -1
        break
    
print(ans)