year = int(input('Type any year (): '))
print(year)
if (year % 4) == 0:
    if (year % 100) == 0:
        if (year % 400) == 0:
            print('The typed year is a leap year')
        else:
            print('Not leap year')
    else:
        print('The typed year is a leap year')
else:
    print('Not leap year')
