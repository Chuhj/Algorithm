inp = input().split()
li = list(range(1, int(inp[0])+1))
k = int(inp[1])

index = 0
res = []
while li:
  index += k - 1
  if index >= len(li):
    index = index % len(li)
  res.append(li.pop(index))

print('<' +', '.join(map(str,res)) + '>')