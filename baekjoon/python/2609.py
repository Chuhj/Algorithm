n, m = map(int, input().split())

def euclid(n, m):
  if m == 0:
    print(n)
    return
  euclid(m, n % m)

euclid(n, m)

c = 1
while True:
  if (n * c) % m == 0 :
    print(n * c)
    break
  c += 1