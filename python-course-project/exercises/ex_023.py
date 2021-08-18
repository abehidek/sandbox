num = input('Type a number between 0 and 9999: ')
if (num.isnumeric()) and (len(num) <= 4):
    num = int(num)
    print(
        'Your number has: \n'
        '{} thousand(s)\n'.format(num // 1000 % 10) +
        '{} hundred(s)\n'.format(num // 100 % 10) +
        '{} dozen(s)\n'.format(num // 10 % 10) +
        '{} unit(s)\n'.format(num // 1 % 10)
    )
    # This way is bad actually:
    # if len(num) == 1:
    # list(num)
    # print(num)
    #     print('Your number has: \n'
    #           '0 thousand(s)\n' +
    #           '0 hundred(s)\n' +
    #           '0 dozen(s)\n' +
    #           '{} unit(s)\n'.format(num[0]))
    # elif len(num) == 2:
    #     print('Your number has: \n'
    #           '0 thousand(s)\n' +
    #           '0 hundred(s)\n' +
    #           '{} dozen(s)\n'.format(num[0]) +
    #           '{} unit(s)\n'.format(num[1]))
    # elif len(num) == 3:
    #     print('Your number has: \n'
    #           '0 thousand(s)\n' +
    #           '{} hundred(s)\n'.format(num[0]) +
    #           '{} dozen(s)\n'.format(num[1]) +
    #           '{} unit(s)\n'.format(num[2]))
    # elif len(num) == 4:
    #     print('Your number has: \n'
    #           '{} thousand(s)\n'.format(num[0]) +
    #           '{} hundred(s)\n'.format(num[1]) +
    #           '{} dozen(s)\n'.format(num[2]) +
    #           '{} unit(s)\n'.format(num[3]))
    # else:
    #     print('Try again')
else:
    print('Try again')
