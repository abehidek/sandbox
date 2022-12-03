ROCK = ['A']
PAPER = ['B']
SCISSORS = ['C']

f = open("scores.txt", "r")

scores = f.read()

plays = list(map(lambda x: x.split(' '), scores.split('\n')))

def calculate_score(arr):
  oponent = arr[0]
  you = arr[1]

  if you == "X": # need to lose
    if oponent in ROCK: return 0 + 3
    if oponent in PAPER: return 0 + 1
    if oponent in SCISSORS: return 0 + 2

  if you == "Y": # need to draw
    if oponent in ROCK: return 3 + 1
    if oponent in PAPER: return 3 + 2
    if oponent in SCISSORS: return 3 + 3

  if you == "Z": # need to win
    if oponent in ROCK: return 6 + 2
    if oponent in PAPER: return 6 + 3
    if oponent in SCISSORS: return 6 + 1

print(sum(list(map(calculate_score, plays))))

