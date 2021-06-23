num = int(input())
i = 1
while num > i:
    num -= i
    i += 1
if i % 2 == 1:
    print(f'{i-num+1}/{num}')
else:
    print(f'{num}/{i-num+1}')