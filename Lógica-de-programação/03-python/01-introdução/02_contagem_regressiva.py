import time

def main():
    contagem_regressiva = 10
    while (contagem_regressiva >= 0):
        print(contagem_regressiva)
        time.sleep(1)
        contagem_regressiva -= 1
    print("BOOM")

main()