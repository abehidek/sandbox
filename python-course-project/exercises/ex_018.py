from math import sin, cos, tan, radians
print('This program calculates the sin, cos and tangent of an angle')
angle = float(input('Type your angle (degrees): '))
radians = radians(angle)  # convert degrees to radians

print('For {}°, you have: \n'.format(angle) +
      'sin {}° = {}\n'.format(angle, sin(radians)) +
      'cos {}° = {}\n'.format(angle, cos(radians)) +
      'tan {}° = {}\n'.format(angle, tan(radians)))
