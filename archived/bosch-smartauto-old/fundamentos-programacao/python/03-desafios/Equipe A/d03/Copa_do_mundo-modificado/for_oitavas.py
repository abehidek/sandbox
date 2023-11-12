import random
def oitavas(times_matamata,ganhador_matamata1,ganhador_matamata2,ganhador_matamata3,
            ganhador_matamata4,ganhador_matamata5,ganhador_matamata6,ganhador_matamata7,
            ganhador_matamata8):
    for i in range(0, 8):
        time_escolhido1 = random.choice(times_matamata)
        times_matamata.remove(time_escolhido1)
        time_escolhido2 = random.choice(times_matamata)
        times_matamata.remove(time_escolhido2)

        matamata_chave = time_escolhido1 + " \033[1;91mX \033[1;0m " + time_escolhido2
        print(matamata_chave)

        if ganhador_matamata1 == "":
            ganhador_matamata1 = time_escolhido1

        elif ganhador_matamata2 == "":
            ganhador_matamata2 = time_escolhido2

        elif ganhador_matamata3 == "":
            ganhador_matamata3 = time_escolhido2

        elif ganhador_matamata4 == "":
            ganhador_matamata4 = time_escolhido2

        elif ganhador_matamata5 == "":
            ganhador_matamata5 = time_escolhido1

        elif ganhador_matamata6 == "":
            ganhador_matamata6 = time_escolhido1

        elif ganhador_matamata7 == "":
            ganhador_matamata7 = time_escolhido2

        elif ganhador_matamata8 == "":
            ganhador_matamata8 = time_escolhido1