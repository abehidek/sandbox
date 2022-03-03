def main():
    ano = int(input("Digite o ano que você nasceu: "))
    idade = 2022 - ano
    if idade > 18:
        print("Pode tirar sua CNH")
    elif idade == 18:
        print("Faça a conta do mês e do dia")
    else:
        print("Não pode tirar sua CNH ainda")

main()