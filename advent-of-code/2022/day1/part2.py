f = open("calories.txt", "r")

calories = f.read()

divided_calories = calories.split("\n\n")

def convert_to_int(stringu: str):
  return int(stringu)

def sum_divided_calorie(stringu: str):
  return sum(list(map(convert_to_int, stringu.split("\n"))))

list_of_summed_calories = list(map(sum_divided_calorie, divided_calories))

list_of_summed_calories.sort()

print(sum([list_of_summed_calories[-1], list_of_summed_calories[-2], list_of_summed_calories[-3]]))


