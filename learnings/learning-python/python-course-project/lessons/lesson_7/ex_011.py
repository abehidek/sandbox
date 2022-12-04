width = float(input('Type the width of the wall (in meters): '))
height = float(input('Type the height of the wall (in meters): '))
area = width * height
ink_amt = area/2
print('You will need {}l to paint a wall that have an area of {}m2'.format(ink_amt, area))
