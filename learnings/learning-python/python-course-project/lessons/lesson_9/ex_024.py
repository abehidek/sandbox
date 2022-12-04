city_name = input('Type the name of your city: ')
if city_name.strip().upper().find('SAINT') == 0:
    print('There is "Saint" in the beginning of the name of your city')
else:
    print('There is not "Saint" in the beginning of the name of your city')
