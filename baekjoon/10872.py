n = 0

def a(n):
    if(n == 0):
        return 1
    return n * a(n-1)

print(a(n))
