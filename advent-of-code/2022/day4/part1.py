f = open("assignment-pairs.txt", "r")

assignment_pairs = f.read().split("\n")

def ranger(first, second):
  return [*range(first, second + 1)]

def verify_assignment_pair(assignment_pair: str):
  [firstPair, secondPair] = assignment_pair.split(",")

  # First solution
  # [firstPairA, firstPairB] = list(map(lambda x: int(x), firstPair.split('-')))
  # [secondPairA, secondPairB] = list(map(lambda x: int(x), secondPair.split('-')))

  # if firstPairA <= secondPairA and firstPairB >= secondPairB:
  #   return True

  # if secondPairA <= firstPairA and secondPairB >= firstPairB:
  #   return True

  # return False

  firstRange = [*ranger(*list(map(lambda x: int(x), firstPair.split('-'))))]
  secondRange = [*ranger(*list(map(lambda x: int(x), secondPair.split('-'))))]

  firstCheck = all(item in firstRange for item in secondRange)
  secondCheck = all(item in secondRange for item in firstRange)

  return firstCheck or secondCheck

print(len(list(filter(verify_assignment_pair, assignment_pairs))))


