def solution(info, n, m):
    items_count = len(info)
    dp = [[float('inf') for j in range(m)] for i in range(items_count + 1)]
    dp[0][0] = 0
    
    for i in range(1, items_count + 1):
        for prev_b in range(m):
            prev_a = dp[i - 1][prev_b]
            
            next_a = prev_a + info[i - 1][0]
            next_b = prev_b + info[i - 1][1]
            
            if next_a < n:
                dp[i][prev_b] = min(next_a, dp[i][prev_b])
            if next_b < m:
                dp[i][next_b] = min(prev_a, dp[i][next_b])
            
    answer = float('inf')
    for b in range(m):
        answer = min(answer, dp[items_count][b])
    
    if answer == float('inf'):
        return -1
    return answer
