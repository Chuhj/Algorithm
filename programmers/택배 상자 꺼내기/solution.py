def solution(n, width, num):
    answer = 0
    div, mod = divmod(n, width)
    height = div if mod == 0 else div + 1
    
    gaps = [i for i in range(1, width * 2, 2)]
    reversed_gaps = gaps[::-1]

    boxes = [[i for i in range(1, width + 1)]]
    
    for h in range(1, height):
        original_row = boxes[h - 1]
        row = []
        found = False
        found_x = -1
        for w in range(width):
            if h % 2 == 0:
                if found:
                    row.append(0)
                else:
                    row.append(original_row[w] + gaps[w])
                
                if original_row[w] + gaps[w] == n:
                    found = True
            else:
                row.append(original_row[w] + reversed_gaps[w])
                if original_row[w] + reversed_gaps[w] == n:
                    found_y = h
                    found_x = w
        if found_x != -1:
            for j in range(found_x - 1, -1, -1):
                row[j] = 0
                
        boxes.append(row)
    
    x = 0
    y = 0
    for i in range(height):
        for j in range(width):
            if boxes[i][j] == num:
                x = j
                y = i
                break
    
    if mod == 0:
        answer = height - y
    else:
        if y == height - 1:
            if boxes[y][x] > 0:
                answer = height - y
            else:
                answer = height - y - 1
        else:
            if boxes[height - 1][x] == 0:
                answer = height - y - 1
            else:
                answer = height - y
    
    return answer
