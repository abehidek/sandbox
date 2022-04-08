from random import randint

# def check(random_num, num_1, num_2):
#     score = 0
#     if (num_1 == random_num):
#         score +=1
#     if(num_2 == random_num):
#         score +=1
#     return score


def check(random_num, player_num_1, player_num_2, cpu_num_1, cpu_num_2, score_arr):
    if player_num_1 == random_num or player_num_2 == random_num:
        print("Jogador ganhou")
        score_arr[0] += 1
    elif cpu_num_1 == random_num or cpu_num_2 == random_num:
        print("CPU ganhou")
        score_arr[1] += 1
    else:
        print("Nenhum dos dois ganharam")
    return score_arr


def generateCpuNum(lim, player_num_1, player_num_2):
    while True:
        cpu_num = randint(1, 6)
        if cpu_num != player_num_1 and cpu_num != player_num_2 and cpu_num != lim:
            break

    return cpu_num


def isfloat(x):
    try:
        float(x)
    except (TypeError, ValueError):
        return False
    else:
        return True


def isint(x):
    try:
        a = float(x)
        b = int(a)
    except (TypeError, ValueError):
        return False
    else:
        return a == b


def inputDiceNum(lim):
    # Input cannot be letter or float, just int
    while True:
        player_num = input("Escolha o número do dado: ")
        if not player_num.isnumeric:
            print(
                "Digite novamente um NÚMERO inteiro entre 1 e 6, e que não sejam iguais"
            )
        elif not isint(player_num):
            print(
                "Digite novamente um número INTEIRO entre 1 e 6, e que não sejam iguais"
            )
        elif int(player_num) > 6 or int(player_num) < 1 or int(player_num) == lim:
            print(
                "Digite novamente um número inteiro entre 1 e 6, e que não sejam iguais"
            )
        else:
            break
    return int(player_num)


def play(score_arr):
    random_num = randint(1, 6)
    print("Numero aleatorio: ", random_num)
    player_num_1 = inputDiceNum(0)
    player_num_2 = inputDiceNum(player_num_1)
    cpu_num_1 = generateCpuNum(0, player_num_1, player_num_2)
    cpu_num_2 = generateCpuNum(cpu_num_1, player_num_1, player_num_2)
    score_arr = check(
        random_num, player_num_1, player_num_2, cpu_num_1, cpu_num_2, score_arr
    )
    print("Score: ", score_arr)
    return score_arr


def main():
    balance = 18.00
    while True:
        print("Voce tem R$", balance)
        o = input("Deseja jogar? [S/N]: ")
        if o.upper() == "S":
            print(f"Saldo: R$ {balance} - R$ 7.5: R$ {balance-7.5}")
            balance -= 7.5
            score_arr = [0, 0]
            while score_arr[0] < 2 or score_arr[1] < 2:
                score_arr = play(score_arr)
                print(score_arr[0])
            print("Saiu")

        else:
            break


main()
