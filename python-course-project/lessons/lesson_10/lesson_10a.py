# Conditionals
name = input('Input your name: ')
if name == 'Guilherme':
    print('What a beautiful name!')
else:
    print('Bad name lmao')
print('Good morning, {}!'.format(name))

grade1 = float(input('Type your first grade: '))
grade2 = float(input('Type your first grade: '))
average = (grade1 + grade2) / 2
print('Your average is {}'.format(average))
# if average >= 6.0:
#     print('Your average was good, congrats!')
# else:
#     print('Your average was bad, study more!')
print('Congrats!' if average >= 6 else 'Study more!')  # simplified condition
