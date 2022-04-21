from os import system
from pynput.keyboard import Key, Controller
from threading import Timer
from random import randint
keyboard = Controller()
import macacos

def swapLetter(masked_word, word, char, err):
    pos = list()
    hit = False
    if char == word:
        return word, True, err
    if char in masked_word and char != "":
        print("Você já digitou essa letra")
        return masked_word, False, err
    for ind, val in enumerate(list(word)):
        if val == char:
            hit = True
            pos.append(ind)
    if not hit:
        err.append(char)
    arr = list(masked_word)
    for j in pos:
        arr[j] = char

    return "".join(arr), hit, err


def getWord():
    f = open("palavras.txt", "r").read()
    row_arr = f.replace('\n', '').split(";")

    randow_row = row_arr[randint(0, len(row_arr)-1)]
    word = randow_row.split(":")[0]
    tip = randow_row.split(":")[1]

    # word = randow_row.split(":")[0]
    # tip = randow_row.split(":")[1]
    return word, tip


def skip():
    keyboard.press(Key.enter)
    keyboard.release(Key.enter)



def header(attempt, masked_word, tip):
    print("-" * 30)
    if attempt == 6:
        print(macacos.macacoHead)
    if attempt == 5:
        print(macacos.macacoHead)
    if attempt == 4:
        print(macacos.macacoBraco1)
    if attempt == 3:
        print(macacos.macacoCorpo)
    if attempt == 2:
        print(macacos.macacoPerna2)
    if attempt == 1:
        print(macacos.macacoPerna1)
    print("Tentativas:", attempt)
    print("\nPalavra:", masked_word)
    print("Dica:", tip)


def userInput(seconds):
    t = Timer(seconds, skip)
    t.start()
    char = input("Você tem %d segundos para responder. Digite uma letra: \n" % seconds)
    t.cancel()
    system("cls")
    return char


def winGame(word):
    print("A palavra é:", word)
    print("Vencestes")
    return True


def lose(word):
    print(macacos.macacoInteiro)
    print("A palavra é:", word)
    print("Você perdeu!!")


def game(attempt, seconds):
    word, tip = getWord()
    masked_word = "_" * len(word)
    err = list()
    win = False

    while attempt > 0:
        header(attempt, masked_word, tip)
        char = userInput(seconds)
        masked_word, hit, err = swapLetter(masked_word, word, char, err)
        print("Palavras erradas:", err)
        if not hit:
            attempt -= 1
            print("Errastes")
        if masked_word == word:
            win = winGame(word)
            break
    if not win:
        lose(word)


def main():
    system("cls")

    game(6, 10)


if __name__ == "__main__":
    main()
