paises = [["Chile", "756.950KM²", "US$ 14.911", "Peso Chileno", "Espanhol", "Americano"],
              ["Argentina", "2.780.000KM²", "US$ 8.433", "Peso argentino", "Castelhano", "Americano"],
              ["Japão", "377.975KM²", "US$ 32.485", "Iene", "Japonês", "Ásiático"],
              ["Alemanha", "357.022KM²", "US$ 51.860", "Euro", "Alemão", "Europeu"],
              ["Brasil", "8.516.000KM²", "US$ 6.450", "Real", "Português", "Americano"],
              ["EUA", "9.834.000KM²", "	US$ 68.309", "Dólar", "Inglês", "Americano"],
              ["Canadá", "9.985.000KM²", "US$ 42.080", "Dólar Americano", "Inglês e Francês", "Americano"],
              ["Russia", "17.100.000KM²", "US$ 7.742", "Rublos Russo", "Russo", "Europeu"]]

#Junte todos os outros exercicis da lista
import sys

def ex1():
    print('=========')
    print("Desafio 1")
    print('=========\n')

    while True:
        print(f"\n===========================")
        print(f"||         Países        ||")
        print(f"||                       ||")
        print(f"|| 1 - Chile             ||")
        print(f"|| 2 - Argentina         ||")
        print(f"|| 3 - Japão             ||")
        print(f"|| 4 - Alemanha          ||")
        print(f"|| 5 - Brasil            ||")
        print(f"|| 6 - EUA               ||")
        print(f"|| 7 - Canadá            ||")
        print(f"|| 8 - Russia            ||")
        print(f"||                       ||")
        print(f"===========================")
        print(f"|| 0 - Sair              ||")
        print(f"===========================\n")

        opUser = int(input(": "))

        if opUser == 1:
            print(f"===========================")
            print(f"|| Nome: {paises[0][0]}       ")
            print(f"|| Extensão: {paises[0][1]}       ")
            print(f"|| PIB: {paises[0][2]} ")
            print(f"|| Moeda: {paises[0][3]} ")
            print(f"|| Lingua: {paises[0][4]} ")
            print(f"|| Continente: {paises[0][5]} ")
            print(f"===========================")
        elif opUser == 2:
            print(f"===========================")
            print(f"|| Nome: {paises[1][0]}       ")
            print(f"|| Extensão: {paises[1][1]}       ")
            print(f"|| PIB: {paises[1][2]} ")
            print(f"|| Moeda: {paises[1][3]} ")
            print(f"|| Lingua: {paises[1][4]} ")
            print(f"|| Continente: {paises[1][5]} ")
            print(f"===========================")
        elif opUser == 3:
            print(f"===========================")
            print(f"|| Nome: {paises[2][0]}       ")
            print(f"|| Extensão: {paises[2][1]}       ")
            print(f"|| PIB: {paises[2][2]} ")
            print(f"|| Moeda: {paises[2][3]} ")
            print(f"|| Lingua: {paises[2][4]} ")
            print(f"|| Continente: {paises[2][5]} ")
            print(f"===========================")
        elif opUser == 4:
            print(f"===========================")
            print(f"|| Nome: {paises[3][0]}       ")
            print(f"|| Extensão: {paises[3][1]}       ")
            print(f"|| PIB: {paises[3][2]} ")
            print(f"|| Moeda: {paises[3][3]} ")
            print(f"|| Lingua: {paises[3][4]} ")
            print(f"|| Continente: {paises[3][5]} ")
            print(f"===========================")
        elif opUser == 5:
            print(f"===========================")
            print(f"|| Nome: {paises[4][0]}       ")
            print(f"|| Extensão: {paises[4][1]}       ")
            print(f"|| PIB: {paises[4][2]} ")
            print(f"|| Moeda: {paises[4][3]} ")
            print(f"|| Lingua: {paises[4][4]} ")
            print(f"|| Continente: {paises[4][5]} ")
            print(f"===========================")
        elif opUser == 6:
            print(f"===========================")
            print(f"|| Nome: {paises[5][0]}       ")
            print(f"|| Extensão: {paises[5][1]}       ")
            print(f"|| PIB: {paises[5][2]} ")
            print(f"|| Moeda: {paises[5][3]} ")
            print(f"|| Lingua: {paises[5][4]} ")
            print(f"|| Continente: {paises[5][5]} ")
            print(f"===========================")
        elif opUser == 7:
            print(f"===========================")
            print(f"|| Nome: {paises[6][0]}       ")
            print(f"|| Extensão: {paises[6][1]}       ")
            print(f"|| PIB: {paises[6][2]} ")
            print(f"|| Moeda: {paises[6][3]} ")
            print(f"|| Lingua: {paises[6][4]} ")
            print(f"|| Continente: {paises[6][5]} ")
            print(f"===========================")
        elif opUser == 8:
            print(f"===========================")
            print(f"|| Nome: {paises[7][0]}       ")
            print(f"|| Extensão: {paises[7][1]}       ")
            print(f"|| PIB: {paises[7][2]} ")
            print(f"|| Moeda: {paises[7][3]} ")
            print(f"|| Lingua: {paises[7][4]} ")
            print(f"|| Continente: {paises[7][5]} ")
            print(f"===========================")
        elif opUser == 0:
            print("Encerrando...\n\n")
            break

def ex2():
    print("Bem vindo ao desafio 2")
    listaResultado = []

    while (True):
            print("=" * 21)
            print("==== Calculadora ====")
            print("=" * 21)

            print("====================================")
            opUser = int(input("Selecione a operação que deseja realizar: \n"
                               "1- Soma\n"
                               "2- Subtração\n"
                               "3- Multiplicação\n"
                               "4- Divisão\n"
                               "5- Sair\n"))
            print("====================================")

            if opUser == str:
                print('Valor inválido, digite novamente')

            if opUser == 1:

                while True:
                    try:
                        num1 = int(input("Digite o primeiro número: "))
                        num2 = int(input("Digite o segundo número: "))
                        break
                    except ValueError:
                        print('Número inválido, digite novamente.')

                resultado = num1 + num2
                listaResultado.append(resultado)
                print("\n\nO resultado da operação realizada é: {}\n".format(listaResultado))
                listaResultado = []

            elif opUser == 2:

                while True:
                    try:
                        num1 = int(input("Digite o primeiro número: "))
                        num2 = int(input("Digite o segundo número: "))
                        break
                    except ValueError:
                        print('Número inválido, digite novamente.')

                resultado = num1 - num2
                listaResultado.append(resultado)
                print("\n\nO resultado da operação realizada é: {}\n".format(listaResultado))
                listaResultado = []

            elif opUser == 3:

                while True:
                    try:
                        num1 = int(input("Digite o primeiro número: "))
                        num2 = int(input("Digite o segundo número: "))
                        break
                    except ValueError:
                        print('Número inválido, digite novamente.')

                resultado = num1 * num2
                listaResultado.append(resultado)
                print("\n\nO resultado da operação realizada é: {}\n".format(listaResultado))
                listaResultado = []

            elif opUser == 4:

                while True:
                    try:
                        num1 = int(input("Digite o primeiro número: "))
                        num2 = int(input("Digite o segundo número: "))
                        break
                    except ValueError:
                        print('Número inválido, digite novamente.')

                resultado = num1 / num2
                listaResultado.append(resultado)
                print("\n\nO resultado da operação realizada é: {}\n".format(listaResultado))
                listaResultado = []

            elif opUser == 5:
                print("\n\n")
                break
            else:
                print("Digite um operação válida! Bobo\n")

def ex3():
    while True:
        print("Bem vindo ao desafio 3")


        valor = float(input('Insira um valor em reais (R$): '))

        d = valor / 4.94
        e = valor / 5.45
        l = valor / 6.51
        k = valor / 0.011

        print('\nO valor inserido em Dólar Americano (US$) é de: {:.2f}'.format(d))
        print('O valor inserido em Euros (Є$) é de: {:.2f}'.format(e))
        print('O valor inserido em Libras Esterlinas (£$) é de: {:.2f}'.format(l))
        print('O valor inserido em Kwanzas Angolanos (Kz$) é de: {:.2f}\n\n'.format(k))
        break

def ex4():
    print("Bem vindo ao desafio 4")

    def opc1():
        azul = "Azul R$: 1486. Tempo: 3H20 horas"
        gol = "Gol R$957. Tempo: 3H30"
        print(f"As opções são: \n{azul}\n{gol}")

    def opc2():
        azul = "Azul R$: 1486. Tempo: 3H15 horas"
        gol = "Gol R$977. Tempo: 3H25"
        print(f"As opções são: \n{azul}\n{gol}")

    def opc3():
        azul = "Azul R$: 1752. Tempo: 2H50 horas"
        gol = "Gol R$1432. Tempo: 2H50"
        print(f"As opções são: \n{azul}\n{gol}")

    def opc4():
        azul = "Azul R$: 510. Tempo: 1H30 horas"
        gol = "Gol R$639. Tempo: 1H40"
        print(f"As opções são: \n{azul}\n{gol}")

    def cupom(lugares):
        if lugares == 1:
            print("======================")
            print(" Azul 15% de desconto ")
            print(f"Azul: {1486 - (15 / 100)}")
            print(" Gol 10% de desconto  ")
            print(f"Gol: {957 - (10 / 100)}")
            print("======================")
        elif lugares == 2:
            print("======================")
            print(" Azul 10% de desconto ")
            print(f"Azul: {1486 - (10 / 100)}")
            print(" Gol 15% de desconto  ")
            print(f"Gol: {975 - (15 / 100)} ")
            print("======================")
        elif lugares == 3:
            print("======================")
            print(" Azul 20% de desconto ")
            print(f"Azul: {1752 - (20 / 100)} ")
            print(" Gol 30% de desconto  ")
            print(f"Gol: {1432 - (30 / 100)} ")
            print("======================")
        elif lugares == 4:
            print("======================")
            print(" Azul 5% de desconto ")
            print(f"Azul: {510 - (5 / 100)}")
            print(" Gol 5% de desconto  ")
            print(f"Gol: {639 - (5 / 100)}")
            print("======================")

    def main():
        while True:
            print("Partida de Viracopos")
            lugares = int(input("Selecione qual o destino:\n1-Maceió\n2-Fortaleza\n3-Rio de Janeiro\n4-Juiz de Fora: "))
            while lugares != 1 and lugares != 2 and lugares != 3 and lugares != 4:
                lugares = int(input("Inválido. Selecione qual o destino:\n1-Maceió\n2-Fortaleza\n3-Rio de Janeiro\n4-Juiz de Fora: "))

            if lugares == 1:
                print("======================")
                print("   COMPANHIA AÉREA    ")
                print("======================")
                opc1()
                break
            elif lugares == 2:
                print("======================")
                print("   COMPANHIA AÉREA    ")
                print("======================")
                opc2()
                break
            elif lugares == 3:
                print("======================")
                print("   COMPANHIA AÉREA    ")
                print("======================")
                opc3()
                break
            elif lugares == 4:
                print("======================")
                print("   COMPANHIA AÉREA    ")
                print("======================")
                opc4()
                break

            cupom(lugares)

    if __name__ == "__main__":
        main()


while(True):
    print('Bem vindo ')
    print('=-' * 30)

    print('===================================')
    print('Escolha qual desafio deseja exibir:')
    print('===================================')
    print('||                               ||')
    print('|| 1 - Lista Países              ||')
    print('|| 2 - Calculadora               ||')
    print('|| 3 - Conversor Moeda           ||')
    print('|| 4 - Passagens                 ||')
    print('||                               ||')
    print('|| sair - para sair              ||')
    print('===================================')
    print('')
    desafio = input('Escolha qual desafio deseja exibir:\n')

    if desafio == '1':
        ex1()
    elif desafio == '2':
        ex2()
    elif desafio == '3':
        ex3()
    elif desafio == '4':
        ex4()
    elif desafio == 'sair':
        print('saindo...')
        sys.exit()
    else:
        print("Opção invalida")
