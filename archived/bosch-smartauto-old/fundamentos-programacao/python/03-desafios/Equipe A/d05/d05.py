def main():
    usuario = "DANIEL DANTE"
    senha = 1234
    saldo = 1200.0
    count = 3

    print("Bem-vindo ao Banco do Brasil")
    while True:
        user = input("Usuário:")
        password = int(input("Senha:"))
        if user.upper() == usuario and password == senha:
            print("Saldo: R$",saldo)
            while True:
                print("-----OPÇÕES----")
                print("[1]-Deposito---")
                print("[2]---Saque----")
                print("[3]---Sair-----")
                print("---------------")
                choice = int(input("Digite a opção que deseja: "))

                if choice == 1:
                    saldo = deposito(saldo)
                    print("Seu saldo agora é de: R$",saldo)
                elif choice == 2:
                    print("Seu saldo agora é de: R$",saque(saldo))
                elif choice == 3:
                    print("Até mais!")
                    break

            break
        else:
            print(f"Credenciais incorretas, você tem {count-1} tentativas")
            count -=1
        if count == 0:
            print("Conta Bloqueada")
            break

def deposito(valor):

    print("Saldo:",valor)
    deposito = int(input("Digite o valor que deseja depositar: "))
    dep_val = valor + deposito
    return dep_val

def saque(valor):
    saque = int(input("Digite o valor que deseja sacar: "))
    while True:
        if saque > valor:
            print("saldo insuficiente ")
            return valor
        elif saque < 0:
            print(valor)
        else:
            saq_val = valor - saque
            return saq_val


main()
