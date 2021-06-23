n = int(input())
li = []
for i in range(n):
    inp, inp2 = map(int, input().split())
    li.append([inp, inp2])

li = sorted(li, key=lambda x: (x[1], x[0]))  # 끝나는 시간 오름차순 -> 시작시간 오름차순
ans = 1
tmp = li[0][1]
for i in range(1, n):
    if li[i][0] >= tmp:
        ans += 1
        tmp = li[i][1]

print(ans)