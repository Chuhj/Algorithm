num = int(input())

for i in range(num):
    h, w, n = map(int, input().split())
    l, f = divmod(n, h)
    if f == 0:
        f = h
        print('{}{:02d}'.format(f, l))
    else:
        print('{}{:02d}'.format(f, l+1))
