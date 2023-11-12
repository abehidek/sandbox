print('\033[1;92mCONTABILIZADOR DE GASTOS\033[m')

salar = 1200
quant_grillT = int()
quant_normalT = int()
quant_sobremesaT = int()

def comida01():
    try:
        while True:
            quant_grill_loc = int(input('\033[1;94mQuantos dias você comeu no grill:\033[m '))
            if quant_grill_loc > 22:
                print('\033[1;91mERRO! Um valor informados não condiz com a quantidade de dias uteis.')
                print('Digite os valores novamente!\033[m')
            else:
                break
    except:
        print('\033[1;91mERRO! Valor inválido.\033[m')
    return quant_grill_loc

quant_grillT = comida01()

def comida02():
    try:
        while True:
            quant_normal_loc = int(input('\033[1;94mQuantos dias você comeu no cardápio normal:\033[m '))
            if quant_normal_loc > 22:
                print('\033[1;91mERRO! Um valor informados não condiz com a quantidade de dias uteis.')
                print('Digite os valores novamente!\033[m')
            else:
                break
    except:
        print('\033[1;91mERRO! Valor inválido.\033[m')
    return quant_normal_loc

quant_normalT = comida02()

def comida03():
    try:
        while True:
            quant_sobremesa_loc = int(input('\033[1;94mQuantos dias você comeu sobremesa:\033[m '))
            if quant_sobremesa_loc > 22:
                print('\033[1;91mERRO! Um valor informados não condiz com a quantidade de dias uteis.')
                print('Digite os valores novamente!\033[m')
            else:
                break
    except:
        print('\033[1;91mERRO! Valor inválido.\033[m')
    return quant_sobremesa_loc

quant_sobremesaT = comida03()

def calculo():
    saldofinal = salar - ((quant_grillT * 11.4) - (quant_normalT * 2.8) - (quant_sobremesaT * 4.5))
    print(f'\033[1;92mO seu salario final foi de R${saldofinal}\033[m')

calculo()

