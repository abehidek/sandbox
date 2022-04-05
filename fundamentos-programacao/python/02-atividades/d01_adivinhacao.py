from random import randint


def generate_number():
    rand_number = randint(1, 101)
    return rand_number


def guess():
    guess_number = int(input("Digite um número entre 1 e 100: "))
    return guess_number


def check(rand_number, guess_number):
    if rand_number == guess_number:
        return True
    else:
        return False


def game(attempts, life):
    rand_number = generate_number()
    win = False
    while attempts > 0 and life > 0:
        print("Sua vida:", life, "\nSuas tentativas: ", attempts)
        guess_number = guess()
        if check(rand_number, guess_number):
            win = True
            break
        else:
            attempts -= 1
            life -= abs(rand_number - guess_number)
            print(f"Você tomou {abs(rand_number - guess_number)} de dano")
            print(
                "Tentativa errada",
                ("\nSua vida esgotou" if life <= 0 else "\nTente novamente"),
            )
            input("Aperte qualquer coisa para continuar")

    print("Você", ("venceu" if win else "perdeu"))


def main():
    print("Bem vindo ao jogo")
    while True:
        game(3, 50)
        opc = input("Deseja continuar?: S/N  ").upper()
        if opc == "N":
            break
        else:
            continue


main()
