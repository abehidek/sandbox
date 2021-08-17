print('This program calculates discount')
price = float(input('Type the price of a product: '))
discount = float(input('Type the discount that you want (percentage): '))

print('The new price with the discount of {}% will be {}'.format(discount, price-(price*(discount/100))))
