# Primitive Types and Data Output
n1 = int(input('Type any number: '))
n2 = int(input('Type other number: '))
s=n1+n2
print('The sum of', n1, 'and', n2, 'equals', s)
print('The sum of {} and {} equals {}'.format(n1, n2, s))
# print('The sum of ' + n1 + 'and ' + n2 + ' equals ' + s) this doesn't work since + is only used to concatenate
# str and not int
