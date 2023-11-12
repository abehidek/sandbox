def main():
    dict = {}
    for i in range(2):
        nome = input(f'Digite o nome do usuário {i}: ')        
        telefone = input(f'Digite o telefone do {nome}: ')        
        dict.update({nome: telefone})

    print(filter_key(dict))
    print(filter_values(dict)) 
    

def filter_values(dict):
    dict_filter = list()
    number_1 = input('Digite o primeiro número: ')
    number_2 = input('Digite o segundo número: ')
    for value in dict.values():
        if value[0] == number_1 and value[len(value)-1] == number_2:
            dict_filter.append(value)

    return dict_filter

def filter_key(dict):
    string = input('Digite uma letra: ')
    char = string[0]
    dict_filter = list()
    for key in dict:
        if key[0] == char:
            dict_filter.append(key)

    return dict_filter

if __name__ == "__main__":
    main()