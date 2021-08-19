from random import randint
from time import sleep
typed_num = input('Try to guess which integer number between 0 and 5 the computer picked randomly: ')
print('Processing...')
sleep(3)
if typed_num.isnumeric():
    random_num = randint(0, 5)
    print('-' * 25)
    if random_num == int(typed_num):
        print('Congrats!, you got it right')
    else:
        print('You got the number wrong, its {}!'.format(random_num))
    print('-' * 25)
else:
    print('You did not typed a number')
