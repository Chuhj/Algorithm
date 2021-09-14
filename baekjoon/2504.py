bracket = input()
array = []

result = 0
temp = 1

for i, e in enumerate(bracket):
  if e == '(':
    temp *= 2
    array.append(e)

  elif e == '[':
    temp *= 3
    array.append(e)

  elif e == ')':
    if not array or array[-1] == '[':
      result = 0
      break
    elif bracket[i - 1] == '(':
      result += temp
    array.pop()
    temp /= 2
      
  elif e == ']':
    if not array or array[-1] == '(':
      result = 0
      break
    elif bracket[i - 1] == '[':
      result += temp
    array.pop()
    temp /= 3

if array:
  result = 0

print(int(result))
