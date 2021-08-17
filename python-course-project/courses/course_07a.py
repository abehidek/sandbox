name = input('Whats your name? ')
print('Its a pleasure {:20}!'.format(name))
print('Its a pleasure {:>20}!'.format(name))  # right align
print('Its a pleasure {:<20}!'.format(name))  # left align
print('Its a pleasure {:^20}!'.format(name))  # centralized
print('Its a pleasure {:=^20}!'.format(name))  # centralized with character

n1 = float(input('Type a number: '))
n2 = float(input('Type another number: '))
print('The sum equals {}'.format(n1 + n2))
print('The subtraction equals {}'.format(n1 - n2))
print('The product equals {}'.format(n1 * n2))
print('The division equals {}'.format(n1 / n2))
print('{} to the power of {} equals {}'.format(n1, n2, n1 ** n2))
print('The whole division equals {}'.format(n1 // n2))
print('The rest of division equals {}'.format(n1 % n2))

# if you the result is something like '1.3333333', you can simply take only 4 numerical places by writing:
print('The division with only 2 numerical places equals {:.4f}'.format(n1 / n2))

# if you don't want print to break a line just put end='' in the end of the line example:
print('This print break lines')
print('This print doesnt break lines ', end='')
print(', See?')
