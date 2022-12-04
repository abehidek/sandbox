# Manipulating Text
# using from https://youtu.be/a7DH88vk2Sk

phrase = 'Python Lesson'
phrase2 = '  Python Lesson  '
print(phrase[3])
print(phrase[3:13])
print(phrase[:13])
print(phrase[2:])
print(phrase[1:13:2])  # yhnLso
print(phrase[::2])  # Pto esn
print(phrase.count('o'))
print(phrase.count('O'))  # uppercase and lowercase are different
print(phrase.upper().count('o'))
print(phrase.upper().count('O'))
print('The len of phrase 1 is', len(phrase))
print('The len of phrase 2 is', len(phrase2))
print('The len of phrase 2 without spaces is', len(phrase2.strip()))
print('Replacing Python with C# will be: ', phrase.replace('Python', 'C#'))

# one important thing is that replace function will not change the variable since it's an instance so doing
# phrase.replace('Python', 'C#')
# print(phrase)
# will not change the phrase, in order to to that you will need to:
# phrase = phrase.replace('Python', 'C#')

print('Lesson' in phrase)  # True
print(phrase.find('Lesson'))  # 7
print(phrase.find('Python'))  # 0
print(phrase.find('python'))  # -1 (-1 because there isn't any 'python' in the phrase)
print(phrase.lower().find('python'))
print(phrase.split())
splitted = phrase.split()
print(len(splitted))  # 2 (Shows how much words there are
print(splitted[0])
print(splitted[1][0])  # L

print('\n')

# print("""Lorem ipsum dolor sit amet, consectetur adipiscing elit.
# Cras suscipit justo metus, sit amet dapibus mi aliquam sit amet.
# Sed ut eros mauris. Praesent quis sodales mauris.
# Proin fermentum est eu augue ultrices, et convallis sapien efficitur. Aliquam at pulvinar magna.
# Cras fringilla hendrerit vulputate.
# Phasellus efficitur, purus at tincidunt pulvinar, felis erat vulputate quam, vitae fermentum elit ipsum id tortor.
# Sed eget velit vel erat tincidunt dictum non vel nulla.""")
