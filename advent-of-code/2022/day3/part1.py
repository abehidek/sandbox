def get_item_priority(letter: str):
  if letter.isupper(): return ord(letter) - 64 + 26
  return ord(letter) - 96

f = open("racksacks.txt", "r")

racksacks = f.read().split("\n")

def calculate_racksack_common_item_priority(racksack: str):
  left = racksack[:len(racksack)//2]
  right = racksack[len(racksack)//2:]

  for letter in list(left):
    if letter in list(right):
      return get_item_priority(letter)

print(sum(list(map(calculate_racksack_common_item_priority, racksacks))))