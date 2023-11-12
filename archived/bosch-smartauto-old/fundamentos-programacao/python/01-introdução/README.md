# Introdução a programação em Python

#### Comando help

Gera uma descrição sobre o comando digitado
```python
$ help()
$ help> print
print(...)
    print(value, ..., sep=' ', end='\n', file=sys.stdout, flush=False)

    Prints the values to a stream, or to sys.stdout by default.
    Optional keyword arguments:
    file:  a file-like object (stream); defaults to the current sys.stdout.
    sep:   string inserted between values, default a space.
    end:   string appended after the last value, default a newline.
    flush: whether to forcibly flush the stream.
```

#### Variáveis

Espaços alocados na memória para armazenar informações

```python
area = "ETS"
type(area) 
```

#### Laços de repetição


#### Funções de string

```python
$ print("R$ {:10.1f}".format(10000.00))
R$    10000.0
$ print("R$ {:010.2f}".format(1.11))
R$ 0000001.11
```