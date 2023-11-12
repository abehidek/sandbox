def main():
    # jogadores = insert_player()
    jogadores = {'Abe': {'pontos': ['5', '10'], 'time': 'cortinas'}, 'Miura': {'pontos': ['15', '20'], 'time': 'vasco'}}
    print(jogadores)
    for key, value in jogadores.items():
        print(key, end='')
        for key, value in value.items():
            print(" ", key,":", value, end='')
        print("")



def insert_player():
    jogadores = {}
    while True:
        player = input("Digite um jogador: ")
        pontos = list()
        jogadores.update({
            player: {
                'pontos': '',
                'time': ''
            }
        }.copy())
        p = input("O jogador jogou alguma partida? [S/N]: ").upper()
        if p == 'S':
            n_partidas = int(input("Digite o número de partidas que o jogador jogou: "))
            for i in range(n_partidas):
                pontos.append(input(f'Digite quantos pontos o jogador {player} fez no set {i+1}: '))
            jogadores.update({
                player: {
                    'pontos': pontos,
                    'time': ''
                }
            }.copy())
        
        t = input("O jogador pertence a algum time? [S/N]: ").upper()
        if t == 'S':
            time = input("Digite o time que o jogador pertence: ")
            jogadores.update({
                player: {
                    'pontos': pontos,
                    'time': time
                }
            }.copy())

        o = input("Deseja adicionar mais jogadores? [S/N]: ").upper()
        if o == 'N':
            break
    return jogadores

if __name__ == "__main__":
    main()