def solution(today, terms, privacies):
    answer = []
    terms_map = {}
    for term in terms:
        [kind, expired_in] = term.split()
        terms_map[kind] = int(expired_in)
        
    for index, privacy in enumerate(privacies):
        [date, kind] = privacy.split()
        if should_destroy(today, date, kind, terms_map) == True:
            answer.append(index + 1)
    return answer

def string_to_date(string):
    year, month, day = map(int, string.split('.'))
    return year, month, day

def date_to_map(year, month, day):
    return {
        'year': year,
        'month': month,
        'day': day
    }

def should_destroy(today, date, kind, terms_map):
    expired_in = terms_map[kind]
    
    year, month, day = string_to_date(date)
    month += expired_in
    
    div, mod = divmod(month, 12)
    
    if mod != 0:
        year += div
        month = mod
    else:
        year += div - 1
        month = 12
    
    expired = date_to_map(year, month, day)
    today = date_to_map(*string_to_date(today))

    if today['year'] > expired['year']:
        return True
    elif today['year'] < expired['year']:
        return False
    elif today['month'] > expired['month']:
        return True
    elif today['month'] < expired['month']:
        return False
    elif today['day'] >= expired['day']:
        return True
    elif today['day'] < expired['day']:
        return False
    
