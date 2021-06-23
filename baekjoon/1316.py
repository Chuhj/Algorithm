str = []
ans = 0
num = int(input())
for i in range(num):
    str = input()
    past = str[0]
    group = []
    for n, i in enumerate(str):
        if i in group and past != i:
            break
        elif n == len(str)-1:
            ans += 1
        elif i not in group:
            group.append(i)
        past = i

print(ans)
