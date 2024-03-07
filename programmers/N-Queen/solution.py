answer = 0
def solution(n):
    global answer
    def nqueen(array, cur):
        global answer
        if (cur == n): answer += 1
        for i in range(n):
            avail = True
            for index, item in enumerate(array):
                if (item == i or item + (cur - index) == i or item - (cur - index) == i):
                    avail = False
                    break
            if avail:
                nqueen([*array, i], cur + 1)

    for i in range(n):
        nqueen([i], 1)

    return answer