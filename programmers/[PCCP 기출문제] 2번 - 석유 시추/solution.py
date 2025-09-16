def solution(land):
    answer = 0

    col = len(land[0])
    row = len(land)

    oil_id = 1
    
    oil_sizes = {}
    oil_map = [[0 for i in range(col)] for i in range(row)]

    for x in range(col):
        for y in range(row):
            if land[y][x] == 1 and oil_map[y][x] == 0:
                size = bfs(y, x, land, oil_map, oil_id)
                oil_sizes[oil_id] = size
                oil_id += 1

    for x in range(col):
        total_size = 0
        summed_oil_ids = set()
        for y in range(row):
            current_oil_id = oil_map[y][x]
            if current_oil_id > 0 and current_oil_id not in summed_oil_ids:
                total_size += oil_sizes[current_oil_id]
                summed_oil_ids.add(current_oil_id)

        answer = max(answer, total_size)

    return answer

dy = [1, -1, 0, 0]
dx = [0, 0, 1, -1]

def bfs(y, x, land, oil_map, oil_id):
    size = 1
    oil_map[y][x] = oil_id
    queue = [[y, x]]
    
    while len(queue) > 0:
        [y, x] = queue.pop()

        for i in range(len(dy)):
            [my, mx] = [y + dy[i], x + dx[i]]
            if (my >= 0 and my < len(land) and mx >= 0 and mx < len(land[0]) and land[my][mx] == 1 and oil_map[my][mx] == 0):
                size += 1
                oil_map[my][mx] = oil_id
                queue.append([my, mx])
    return size
