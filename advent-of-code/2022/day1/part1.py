f = open("calories.txt", "r")

calories = f.read()

divided_calories = calories.split("\n\n")

def convert_to_int(stringu: str):
  return int(stringu)

def sum_divided_calorie(stringu: str):
  return sum(list(map(convert_to_int, stringu.split("\n"))))

print(max(list(map(sum_divided_calorie, divided_calories))))


