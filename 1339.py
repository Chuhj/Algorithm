a = ['G', 'C', 'F']
b = ['A', 'C', 'D', 'E', 'B']

n = int(input())
li = []
sum = 0
alphabet = {}

for _ in range(n):
  inp = input()
  li.append(inp)

for i in li:
  for e, alpha in enumerate(i[::-1]):
    if alpha not in alphabet.keys():
      alphabet[alpha] = 0
    alphabet[alpha] += pow(10, e)

alphabet = sorted(alphabet.items(), key=lambda x: x[1], reverse=True)

t = 9
for i in alphabet:
  sum += i[1] * t
  t -= 1
print(sum)