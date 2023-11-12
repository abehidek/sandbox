from random import sample
import random

primeira_chave=[]
segunda_chave = []

times_oitavas = ["França", "Argentina", "Uruguai", "Portugal", "Espanha", "Russia", "Coracia", "Dinamarca",
                 "Brasil", "Mexico", "Belgica", "Japão", "Suecia", "Suiça", "Colombia", "Inglaterra"]

for i in range(0,8):
    time_escolhido1 = random.choice(times_oitavas)
    times_oitavas.remove(time_escolhido1)
    time_escolhido2 = random.choice(times_oitavas)
    times_oitavas.remove(time_escolhido2)

    primeira_chave = time_escolhido1, time_escolhido2
    print(primeira_chave)
    for i in range(0,4):
        time_escolhido1 = random.choice(primeira_chave)
        primeira_chave.remove(time_escolhido1)
        time_escolhido2 = random.choice(primeira_chave)
        primeira_chave.remove(time_escolhido2)

        segunda_chave = time_escolhido1, time_escolhido2
        print(segunda_chave)


