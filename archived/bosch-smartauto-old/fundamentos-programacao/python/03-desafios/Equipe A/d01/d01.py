lista = ['A. Arroz', 15.0], ['B. Feijão', 06.70], ['C. Bife', 23.99], ['D. Macarrão', 02.50], ['E. Pão', 0.60]
saldo = 300.0
resposta = 'S'

print('='*40)
print("Tabela de preços.\nSaldo: R$300.0")
print('='*40)
print(lista)

for posicao in range(0, len(lista)):
    if posicao % 2 == 0:
        print(f'{lista[posicao]:<30}', end='')
    else:
        print(f'R${lista[posicao]:>7.2f}')

print('='*40)
def comparar(n):
    for n in lista:
        if n == posa:
            posa = n
            return lista.index(posa)
        if n == posb:
            posb = n
            return lista.index(posb)
        if n == posc:
            posc = n
            return lista.index(posc)
        if n == posd:
            posd = n
            return lista.index(posd)
        if n == pose:
            pose = n
            return lista.index(pose)


#n = int(input("Escolha um número da tabela: "))

#if escolha < saldo:
#    print("Saldo insuficiente.")
#    exit()
#else:
#    print("Deseja comprar mais alguma coisa? S/N".upper())
#if resposta == 'S':
#    escolha = int(input("Escolha um produto da lista: "))
#else:
#    print("Você comprou os itens: {}\nValor gasto: {}".format(escolha, escolha))