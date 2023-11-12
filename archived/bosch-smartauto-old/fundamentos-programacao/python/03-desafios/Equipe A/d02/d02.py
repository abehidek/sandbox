continuar = input('Deseja calcular imc? (s/n) ')
print ('--------------------------------------')
while continuar == 's':


    def imc():
        peso = float(input('Digite seu peso (em Kg): '))
        alt = float(input('Digite sua altura (em metros): '))
        imc = peso / alt ** 2
        print ('Seu imc e: %.4f' % imc)

        def tabela():
            if imc < 18.5:
                print ('Abaixo do peso')
            elif imc < 24.9:
                print ('Peso Normal')
            elif imc < 29.9:
                print ('Sobrepeso')
            elif imc < 34.9:
                print ('Obesidade Grau I')
            elif imc < 39.9:
                print ('Obesidade Grau II')
            else:
                print ('Obesidade Grau III ou Morbida')

        tabela()

    imc()
    continuar = input('Deseja calcular novamente? (s/n) ')
    print ('--------------------------------------')
else:
    print ('Você saiu')