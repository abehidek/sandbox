distance = input('Type the distance traveled (km/h): ')
if distance.isnumeric():
    distance = float(distance)
    if distance <= 200:
        price = distance * 0.5
    else:
        price = distance * 0.45
    print(f'The price will be R$ {price:.2f}')
else:
    print('You did not type an integer number')