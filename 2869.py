a, b, v = map(int, input().split())

m, n = divmod((v-a), (a-b))

if n > 0:
    m += 2
else:
    m += 1

print(m)