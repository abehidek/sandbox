ROCK = ['A', 'X']
PAPER = ['B', 'Y']
SCISSORS = ['C', 'Z']

f = open("scores.txt", "r")

scores = f.read()

plays = list(map(lambda x: x.split(' '), scores.split('\n')))

total_score = 0

for play in plays:
  result = 0
  
  if play[0] in ROCK and play[1] in ROCK: total_score += 3 + 1; continue;
  if play[0] in PAPER and play[1] in PAPER: total_score += 3 + 2; continue;
  if play[0] in SCISSORS and play[1] in SCISSORS: total_score += 3 + 3; continue;

  if play[0] in ROCK:
    if play[1] in PAPER: total_score += 2 + 6; continue; # win
    if play[1] in SCISSORS: total_score += 3 + 0; continue; # lose

  if play[0] in PAPER:
    if play[1] in ROCK: total_score += 1 + 0; continue; # lose
    if play[1] in SCISSORS: total_score += 3 + 6; continue; # win

  if play[0] in SCISSORS:
    if play[1] in ROCK: total_score += 1 + 6; continue; # win
    if play[1] in PAPER: total_score += 2 + 0; continue; # lose

print(total_score)