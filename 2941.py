str = input()
chk = []
sum = 0

for i in str:
    chk.append(i)
    if(len(chk) >= 2):
        if(chk[0] == 's' and chk[1] == '=' or
                chk[0] == 'l' and chk[1] == 'j' or
                chk[0] == 'n' and chk[1] == 'j' or
                chk[0] == 'c' and chk[1] == '=' or
                chk[0] == 'c' and chk[1] == '-' or
                chk[0] == 'd' and chk[1] == '-' or
                chk[0] == 'z' and chk[1] == '='):
            del chk[0]
            del chk[0]
            continue
        elif ((len(chk) >= 3) and (chk[0] == 'd' and chk[1] == 'z')):
            if(chk[2] == '='):
                del chk[0]
                del chk[0]
                del chk[0]
                sum -= 1
                continue
            else:
                del chk[0]

        if(chk[0] == 'd' and chk[1] == 'z'):
            sum += 1
            continue
        else:
            del chk[0]
            
    sum += 1

print(sum)