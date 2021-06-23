import sys
n = int(sys.stdin.readline())

stack = []

for _ in range(n):
  inp = sys.stdin.readline().split()
  command = inp[0]
  if command == 'push':
    stack.append(inp[1])
  elif command == 'pop':
    print(stack.pop()) if stack else print(-1)
  elif command == 'size':
    print(len(stack))
  elif command == 'empty':
    print(0) if stack else print(1)
  elif command == 'top':
    print(stack[-1]) if stack else print(-1)