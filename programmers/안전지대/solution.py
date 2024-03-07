danger = 0

def solution(board):
    board_len = len(board)
    
    visited = [[False for _ in range(board_len)] for _ in range(board_len)]
    dy = [-1, -1, -1, 0, 1, 1, 1, 0]
    dx = [-1, 0, 1, 1, 1, 0, -1, -1]
    
    def check(y, x):
        global danger

        if not visited[y][x]:
            visited[y][x] = True
            danger += 1

        for i in range(8):
            my = y + dy[i]
            mx = x + dx[i]
            if my < 0 or my >= board_len or mx < 0 or mx >= board_len:
                continue
            if visited[my][mx]:
                continue
            
            visited[my][mx] = True
            danger += 1
    
    for y in range(board_len):
        for x in range(board_len):
            if board[y][x] == 1:
                check(y, x)

    return board_len * board_len - danger