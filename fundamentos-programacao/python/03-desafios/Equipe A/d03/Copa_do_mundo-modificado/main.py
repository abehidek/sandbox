import podium, contador, random,for_oitavas

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

for_oitavas.oitavas(times_matamata,ganhador_matamata1,ganhador_matamata2,ganhador_matamata3,
            ganhador_matamata4,ganhador_matamata5,ganhador_matamata6,ganhador_matamata7,
            ganhador_matamata8)

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

contador.contador(time_escolhido_final)

podium.podium(time_escolhido_final,time_escolhido_final_segundo_lugar,time_escolhido8)