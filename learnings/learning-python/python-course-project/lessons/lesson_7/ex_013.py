print('This program calculates your salary increase')
price = float(input('Type your salary: '))
discount = float(input('Type your increase that you want (percentage): '))

print('Your new salary with increase of {}% will be {}'.format(discount, price+(price*(discount/100))))
