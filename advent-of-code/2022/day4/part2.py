f = open("assignment-pairs.txt", "r")

assignment_pairs = f.read().split("\n")

def ranger(first, second): return [*range(first, second + 1)]

def verify_assignment_pair(assignment_pair: str):
  [firstPair, secondPair] = assignment_pair.split(",")

  firstRange = [*ranger(*list(map(lambda x: int(x), firstPair.split('-'))))]
  secondRange = [*ranger(*list(map(lambda x: int(x), secondPair.split('-'))))]

  for elem in firstRange:
    if elem in secondRange: return True

  return False

print(len(list(filter(verify_assignment_pair, assignment_pairs))))


