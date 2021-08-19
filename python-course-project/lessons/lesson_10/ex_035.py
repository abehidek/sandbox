# the program verify if the value of the lines given by the user can produce an triangle
lines = [
    float(input('Type the first value of the first line: ')),
    float(input('Type the second value of the first line: ')),
    float(input('Type the third value of the first line: ')),
]
if lines[0] + lines[1] > lines[2] and lines[0] + lines[2] > lines[1] and lines[1] + lines[2] > lines[0]:
    print('The triangle can be produced.')
else:
    print('The triangle can not be produced')
# end
