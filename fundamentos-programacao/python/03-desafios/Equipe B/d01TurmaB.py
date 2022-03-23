paises = [["Chile", "756.950KM²", "US$ 14.911", "Peso Chileno", "Espanhol", "Americano"],
          ["Argentina", "2.780.000KM²", "US$ 8.433", "Peso argentino", "Castelhano", "Americano"],
          ["Japão", "377.975KM²", "US$ 32.485", "Iene", "Japonês", "Ásiático"],
          ["Alemanha", "357.022KM²", "US$ 51.860", "Euro", "Alemão", "Europeu"],
          ["Brasil", "8.516.000KM²", "US$ 6.450", "Real", "Português", "Americano"],
          ["EUA", "9.834.000KM²", "	US$ 68.309", "Dólar", "Inglês", "Americano"],
          ["Canadá", "9.985.000KM²", "US$ 42.080", "Dólar Americano", "Inglês e Francês", "Americano"],
          ["Russia", "17.100.000KM²", "US$ 7.742", "Rublos Russo", "Russo", "Europeu"]]
while True:
    print(f"===========================")
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
    print(f"===========================")

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
    elif opUser == 8 :
        print(f"===========================")
        print(f"|| Nome: {paises[7][0]}       ")
        print(f"|| Extensão: {paises[7][1]}       ")
        print(f"|| PIB: {paises[7][2]} ")
        print(f"|| Moeda: {paises[7][3]} ")
        print(f"|| Lingua: {paises[7][4]} ")
        print(f"|| Continente: {paises[7][5]} ")
        print(f"===========================")
    elif opUser == 0:
        print("Encerrando...")
        break