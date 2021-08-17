import math
import random
# if you wanna only import one thing you can use 'from ** import **'
# from math import sqrt
# if you want to import external libraries you can use PyPi
# https://pypi.org/

num = float(input('Type a number: '))
root = math.sqrt(num)

print('The square root of {} equals {}'.format(num, root))

random_num = random.random()
random_num2 = random.randint(1, 10)
print(random_num, random_num2)
