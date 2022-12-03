def get_item_priority(letter: str):
  if letter.isupper(): return ord(letter) - 64 + 26
  return ord(letter) - 96

f = open("racksacks.txt", "r")

racksacks = f.read().split("\n")

def chunks(lst, n):
    for i in range(0, len(lst), n):
        yield lst[i:i + n]

def calculate_racksack_group_item_priority(racksack_group):
  first = list(racksack_group[0])
  second = list(racksack_group[1])
  third = list(racksack_group[2])

  for letter in first:
    if letter in second and letter in third:
      return get_item_priority(letter)

racksacks_groups = list(chunks(racksacks, 3))

print(sum(list(map(calculate_racksack_group_item_priority, racksacks_groups))))