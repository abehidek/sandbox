# I used these:
# https://www.w3schools.com/python/python_arrays.asp
# https://realpython.com/python-boolean/#:~:text=The%20Python%20Boolean%20type%20is,0%20%3D%3D%201%20is%20False%20.
from random import shuffle
print('This program sorts names')
names = [str(input('Type a name: ')), str(input('Type another name: '))]
# c = bool(input('Do you want to add more names? (0 - False / 1 - True): ')) <- this doesnt work lol
c = int(input('Do you want to add more names? (0 - No / 1 - Yes): '))

while c == 1:
    print('\n')
    names.append(str(input('Type another name: ')))
    c = int(input('Do you want to add more names? (0 - No / 1 - Yes): '))

shuffle(names)  # shuffling array
print('\n')
for x in names:  # looping through all the elements of the array
    print(x)
