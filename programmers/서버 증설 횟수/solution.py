def solution(players, m, k):
    answer = 0
    
    # amount, start, end
    statuses = []
    
    current = 0
    for index, player in enumerate(players):
        # 제거
        for status_index, (amount, start, end) in enumerate(statuses):
            if index == end:
                statuses[status_index][2] = 0
                current -= amount
        
        required = player // m
        if required > current: # 증설
            to_extend = required - current
            current = current + to_extend
            statuses.append([to_extend, index, index + k])
            answer += to_extend

    return answer
