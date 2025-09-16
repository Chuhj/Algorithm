def solution(s):
    answer = 0
    first_char = s[0]
    
    first_char_size = 0
    other_char_size = 0
    for i in range(len(s)):
        if first_char_size == 0 and other_char_size == 0:
            first_char = s[i]            
    
        if s[i] == first_char:
            first_char_size += 1
        elif s[i] != first_char:
            other_char_size += 1

        if first_char_size == other_char_size:
            answer += 1
            first_char_size = 0
            other_char_size = 0
            
    if first_char_size != 0 or other_char_size != 0:
        answer += 1
        
    return answer
