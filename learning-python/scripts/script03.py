num_1=input('Digite o primeiro número: ')
num_2=input('Digite o segundo número: ')

if(num_1.isdigit() and num_2.isdigit()):
    sum=int(num_1)+int(num_2)
    print('A soma entre os dois números é: ' + str(sum))

else:
    print('Você não digitou 2 números, tente novamente')
