salary = float(input('Type the salary: '))
if salary > 1250:
    salary = salary+(salary*0.1)
else:
    salary = salary+(salary*0.15)
print(f'Your new salary with the increase is {salary}')
