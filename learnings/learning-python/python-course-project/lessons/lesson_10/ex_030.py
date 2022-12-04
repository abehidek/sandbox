num = input('Type an integer number: ')
if num.isnumeric():
    print('Your number is even' if (int(num) % 2) == 0 else 'Your number is odd')
else:
    print('You did not type an integer number')