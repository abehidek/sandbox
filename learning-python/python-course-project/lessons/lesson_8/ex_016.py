from math import floor, trunc
print('This program calculates how many integers you have in your program')
num = float(input('Type a number: '))
print('Your number {} has {} integers'.format(num, floor(num)))
print('Your number {} has {} integers'.format(num, trunc(num)))
print('Your number {} has {} integers'.format(num, int(num)))
