def solution(cap, n, deliveries, pickups):
    answer = 0
    
    while len(deliveries) > 0 or len(pickups) > 0:
        current_delivery = cap
        current_pickup = cap
        last_delivery_index = 0
        last_pickup_index = 0
        
        for i in range(len(deliveries) - 1, -1, -1):
            if deliveries[i] != 0 and last_delivery_index == 0:
                last_delivery_index = i + 1
            if current_delivery <= 0:
                break
            if deliveries[i] == 0:
                deliveries.pop(i)
                continue
            
            deliveries[i] -= current_delivery
            
            if deliveries[i] < 0:
                current_delivery = -deliveries[i]
                deliveries[i] = 0
            elif deliveries[i] >= 0:
                current_delivery = 0
            
        for i in range(len(pickups) - 1, -1, -1):
            if pickups[i] != 0 and last_pickup_index == 0:
                last_pickup_index = i + 1
            if current_pickup <= 0:
                break
            if pickups[i] == 0:
                pickups.pop(i)
                continue
            
            pickups[i] -= current_pickup
            
            if pickups[i] < 0:
                current_pickup = -pickups[i]
                pickups[i] = 0
            elif pickups[i] >= 0:
                current_pickup = 0

        current_distance = max(last_delivery_index, last_pickup_index)
        
        if current_distance > 0:
            answer += current_distance * 2
            
    return answer
