from random import sample
import random

times_matamata = ["França", "Argentina", "Uruguai", "Portugal", "Espanha", "Rússia", "Croácia", "Dinamarca",
                 "Brasil", "México", "Bélgica", "Japão", "Suecia", "Suiça", "Colômbia", "Inglaterra"]

ganhador_matamata1=""
ganhador_matamata2=""
ganhador_matamata3=""
ganhador_matamata4=""
ganhador_matamata5=""
ganhador_matamata6=""
ganhador_matamata7=""
ganhador_matamata8=""

ganhador_oitavas1=""
ganhador_oitavas2=""
ganhador_oitavas3=""
ganhador_oitavas4=""

ganhador_quartas1=""
ganhador_quartas2=""

print(" ")
print(10*"\033[1;32m-"+"OITAVAS DE FINAL"+10*"-")
print(" \033[1;0m")

for i in range(0,8):
    time_escolhido1 = random.choice(times_matamata)
    times_matamata.remove(time_escolhido1)
    time_escolhido2 = random.choice(times_matamata)
    times_matamata.remove(time_escolhido2)

    matamata_chave = time_escolhido1+" \033[1;91mX \033[1;0m "+time_escolhido2
    print(matamata_chave)

    if ganhador_matamata1=="":
        ganhador_matamata1=time_escolhido1

    elif ganhador_matamata2 == "":
        ganhador_matamata2 = time_escolhido2

    elif ganhador_matamata3 == "":
        ganhador_matamata3=time_escolhido2

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

times_oitavas=[ganhador_matamata1,ganhador_matamata2,ganhador_matamata3,ganhador_matamata4,ganhador_matamata5,ganhador_matamata6,ganhador_matamata7,ganhador_matamata8]


print(" ")
print(10*"\033[1;32m-"+"QUARTAS DE FINAL"+10*"-")
print(" \033[1;0m")

for i in range(0,4):
    time_escolhido3 = random.choice(times_oitavas)
    times_oitavas.remove(time_escolhido3)
    time_escolhido4 = random.choice(times_oitavas)
    times_oitavas.remove(time_escolhido4)

    oitavas_chave = time_escolhido3 + " \033[1;91mX \033[1;0m " + time_escolhido4
    print(oitavas_chave)

    if ganhador_oitavas1 == "":
        ganhador_oitavas1 = time_escolhido3

    elif ganhador_oitavas2 == "":
        ganhador_oitavas2 = time_escolhido4

    elif ganhador_oitavas3 == "":
        ganhador_oitavas3 = time_escolhido3

    elif ganhador_oitavas4 == "":
        ganhador_oitavas4 = time_escolhido4

times_quartas=[ganhador_oitavas1,ganhador_oitavas2,ganhador_oitavas3,ganhador_oitavas4]


print(" ")
print(10*"\033[1;32m-"+"SEMI_FINAIS"+10*"-")
print(" \033[1;0m")


time_escolhido5 = random.choice(times_quartas)
times_quartas.remove(time_escolhido5)
time_escolhido6 = random.choice(times_quartas)
times_quartas.remove(time_escolhido6)
time_escolhido7 = random.choice(times_quartas)
times_quartas.remove(time_escolhido7)
time_escolhido8 = random.choice(times_quartas)
times_quartas.remove(time_escolhido8)

quartas_chave = time_escolhido5 + " \033[1;91mX \033[1;0m " + time_escolhido6
print(quartas_chave)
quartas_chave_2 = time_escolhido7 + " \033[1;91mX \033[1;0m " + time_escolhido8
print(quartas_chave_2)

ganhador_quartas1 = time_escolhido5

ganhador_quartas2 = time_escolhido7

times_semi=[ganhador_quartas1,ganhador_quartas2]



print(" ")
print(10*"\033[1;32m-"+"FINAL"+10*"-")
print(" \033[1;0m")

time_escolhido9 = random.choice(times_semi)
times_semi.remove(time_escolhido9)
time_escolhido10 = random.choice(times_semi)
times_semi.remove(time_escolhido10)
ganhador_semi1 = time_escolhido9
ganhador_semi2 = time_escolhido10

semi_chave = time_escolhido9 + " \033[1;91mX \033[1;0m" + time_escolhido10
print(semi_chave)

times_final=[ganhador_semi1,ganhador_semi2]


print(" ")
print(10*"\033[1;32m-"+"GANHADOR"+10*"-")
print(" \033[1;0m")

time_escolhido_final=random.choice(times_final)
times_final.remove(time_escolhido_final)
time_escolhido_final_segundo_lugar=random.choice(times_final)

if time_escolhido_final == "Portugal":
    print(f"\033[1;94m{time_escolhido_final}\033[1;0m possui \033[1;94muma\033[1;0m copa contando a de 2022")

elif time_escolhido_final == "Inglaterra":
    print(f"\033[1;94m{time_escolhido_final}\033[1;0m possui \033[1;94mduas\033[1;0m copas contando a de 2022")

elif time_escolhido_final == "Brasil":
    print(f"\033[1;94m{time_escolhido_final}\033[1;0m possui \033[1;94mseis\033[1;0m copas contando a de 2022")

elif time_escolhido_final == "Argentina":
    print(f"\033[1;94m{time_escolhido_final}\033[1;0m possui \033[1;94mtrês\033[1;0m copas contando a de 2022")

elif time_escolhido_final == "Rússia":
    print(f"\033[1;94m{time_escolhido_final}\033[1;0m possui \033[1;94muma\033[1;0m copas contando a de 2022")

elif time_escolhido_final == "México":
    print(f"\033[1;94m{time_escolhido_final}\033[1;0m possui \033[1;94muma\033[1;0m copas contando a de 2022")

elif time_escolhido_final == "França":
    print(f"\033[1;94m{time_escolhido_final}\033[1;0m possui \033[1;94mtrês\033[1;0m copas contando a de 2022")

elif time_escolhido_final == "Bélgica":
    print(f"\033[1;94m{time_escolhido_final}\033[1;0m possui \033[1;94muma\033[1;0m copas contando a de 2022")

elif time_escolhido_final == "Colômbia":
    print(f"\033[1;94m{time_escolhido_final}\033[1;0m possui \033[1;94muma\033[1;0m copas contando a de 2022")

elif time_escolhido_final == "Suiça":
    print(f"\033[1;94m{time_escolhido_final}\033[1;0m possui \033[1;94muma\033[1;0m copas contando a de 2022")

elif time_escolhido_final == "Suecia":
    print(f"\033[1;94m{time_escolhido_final}\033[1;0m possui \033[1;94muma\033[1;0m copas contando a de 2022")

elif time_escolhido_final == "Japão":
    print(f"\033[1;94m{time_escolhido_final}\033[1;0m possui \033[1;94muma\033[1;0m copas contando a de 2022")

elif time_escolhido_final == "Dinamarca":
    print(f"\033[1;94m{time_escolhido_final}\033[1;0m possui \033[1;94muma\033[1;0m copas contando a de 2022")

elif time_escolhido_final == "Croácia":
    print(f"\033[1;94m{time_escolhido_final}\033[1;0m possui \033[1;94muma\033[1;0m copas contando a de 2022")

elif time_escolhido_final == "Uruguai":
    print(f"\033[1;94m{time_escolhido_final}\033[1;0m possui \033[1;94mtrês\033[1;0m copas contando a de 2022")

elif time_escolhido_final == "Espanha":
    print(f"\033[1;94m{time_escolhido_final}\033[1;0m possui \033[1;94mduas\033[1;0m copas contando a de 2022")

print(" ")
print(10 * "\033[1;34m-" + "(1°) PRIMEIRO LUGAR" + 10 * "-")
print(time_escolhido_final)
print(" \033[1;0m")
print(" ")

print(10 * "\033[1;36m-" + "(2°) SEGUNDO LUGAR" + 10 * "-")
print(time_escolhido_final_segundo_lugar)
print(" \033[1;0m")
print(" ")

print(10 * "\033[1;93m-" + "(3°) TERCEIRO LUGAR" + 10 * "-")
print(time_escolhido8)
print(" \033[1;0m")