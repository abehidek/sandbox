phrase = input('Type any phrase: ').strip()
print('In your phrase there are: '
      '{} letter(s) "A"\n'.format(phrase.upper().count('A')) +
      'The letter "A/a" appears in the position [{}] for the first time\n'.format(phrase.upper().find('A')) +
      'The letter "A/a" appears in the position [{}] for the last time\n'.format(phrase.upper().rfind('A')))
