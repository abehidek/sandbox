number = int(input('Type a number to see its times table: '))
print(
    '{} * 1 = {}\n'.format(number, number*1) +
    '{} * 2 = {}\n'.format(number, number*2) +
    '{} * 3 = {}\n'.format(number, number*3) +
    '{} * 4 = {}\n'.format(number, number*4) +
    '{} * 5 = {}\n'.format(number, number*5) +
    '{} * 6 = {}\n'.format(number, number*6) +
    '{} * 7 = {}\n'.format(number, number*7) +
    '{} * 8 = {}\n'.format(number, number*8) +
    '{} * 9 = {}\n'.format(number, number*9) +
    '{} * 10 = {}\n'.format(number, number*10))

i = 1
while i <= 10:
    print('{} * {} = {}'.format(number, i, number*i))
    i += 1
else:
    print('the loop ended')
