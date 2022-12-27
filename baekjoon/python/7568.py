inp = int(input())
li = []

for i in range(inp):
    li.append(list(map(int, input().split())))

ans = [1 for i in range(inp)]

for e, i in enumerate(li):
    for j in li:
        if i[0] < j[0] and i[1] < j[1]:
            ans[e] += 1

    print(ans[e], end=' ')
