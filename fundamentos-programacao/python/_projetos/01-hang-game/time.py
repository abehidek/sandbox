from time import sleep
from os import system

count = 10
while count > 0:
    print(count)
    sleep(1)
    count -= 1
    system("cls")
