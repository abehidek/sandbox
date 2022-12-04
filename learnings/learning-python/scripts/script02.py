nasc_dia=input('Que dia você nasceu? ')
nasc_mes=input('Que mês você nasceu? ')
nasc_ano=input('Que ano você nasceu? ')

if(nasc_mes.isdigit()):
    print('Sua data de nascimento é '+ nasc_dia + '/' + nasc_mes + '/' + nasc_ano)
else:
    print('Sua data de nascimento é '+ nasc_dia + ' de ' + nasc_mes + ' de ' + nasc_ano)
