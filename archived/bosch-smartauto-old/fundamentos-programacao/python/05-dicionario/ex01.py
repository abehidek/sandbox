from calendar import isleap
from time import sleep

def main():
    dict = {}
    while True:
        key = input('Digite a chave: ')
        val = input('Digite o valor: ')
        dict.update({key:val})
        o = input('Deseja continuar? [S/N]:').upper()
        if o == 'N':
            break

    foo = input('Digite o ano para ser verificado: ')
    if not foo in dict.values() and not foo in dict.keys():
        print("O ano não está no dicionário")
    else:
        print('O ano está no dicionário')
        print('Verificando se é ano bissexto...')
        sleep(2)
        print("É ano bissexto" if isleap(int(foo)) else "Não é ano bissexto")

if __name__ == "__main__":
    main()