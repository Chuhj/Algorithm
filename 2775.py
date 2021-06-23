T = int(input())

for k in range(T):
    k = int(input())
    n = int(input())

    a = [list(range(1, n+1))] # 0층

    for i in range(1, k+1): # 1층부터
        a.append([1]) # 첫 호는 1
        for j in range(1, n): # 1호부터
            a[i].append(a[i][j-1] + a[i-1][j])
            
    print(a[k][n-1])