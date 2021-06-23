for _ in range(int(input())):
  stack = []
  s = input()

  for i in s:
    stack.append(i)
    if len(stack) >= 2 and i == ')' and stack[-2] == '(':
      stack.pop()
      stack.pop()
      
  print('NO') if stack else print("YES")