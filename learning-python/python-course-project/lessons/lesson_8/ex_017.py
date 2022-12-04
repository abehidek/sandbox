from math import sqrt, hypot
print('This program calculates the hypotenuse of an triangle based on its sides')
opposite_side = float(input('Type the opposite side: '))
adjacent_side = float(input('Type the opposite side: '))
# hypotenuse = sqrt(opposite_side ** 2 + adjacent_side ** 2)
hypotenuse = hypot(opposite_side, adjacent_side)
print('The hypotenuse of an triangle of sides {} and {} equals {}'.format(opposite_side, adjacent_side,hypotenuse))
