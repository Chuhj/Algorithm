n = int(input())

for i in range(n):
    string = input().split()
    print('Case #{}:'.format(i+1), end=' ')
    for j in string[::-1]:
        print(j, end=' ')