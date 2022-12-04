velocity = input('Input the vehicle velocity (km/h): ')
if velocity.isnumeric():
    if float(velocity) > 80:
        print('Your velocity is too high!')
        print('The penalty will be {}'.format(7 * (float(velocity) - 80)))
    else:
        print('No problem with the velocity')
else:
    print('You did not typed a velocity number')
