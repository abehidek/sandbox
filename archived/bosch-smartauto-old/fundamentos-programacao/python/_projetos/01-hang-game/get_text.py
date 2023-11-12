# word = "abacaxi"
# tip = "fruta"

f = open("palavras.txt", "r").read()
words_arr = f.replace("\n", "").split(";")
print(words_arr[0].split(":")[0])
