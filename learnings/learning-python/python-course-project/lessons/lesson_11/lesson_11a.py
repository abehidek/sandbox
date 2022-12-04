# Colors
# Color diagram: https://i.imgur.com/gARS1Yp.png

print('\033[31mHello World')
print('\033[31;43mHello World')
print('\033[1;31;43mHello World')
print('\033[1;31;43mHello World\033[m')
print('\033[4;30;45mHello World\033[m')
print('\033[4;29;45mHello World\033[m')
print('\033[4;29;40mHello World\033[m')
print('\033[7;29;40mHello World\033[m')  # the '7' inverts the colors of the text and background
a = 3
b = 5
print('The values are \033[32m{}\033 and \033[31m{}\033[m'.format(a, b))
name = 'Guilherme'
print('Hello {}{}{}!!'.format('\033[34m', name, '\033[m'))
colors = {
    'clean': '\033[m',
    'blue': '\033[34m',
    'yellow': '\033[33m',
    'monochromatic': '\033[0;29;40m'
}
print('Welcome {}{}{}'.format(colors['monochromatic'], name, colors['clean']))
