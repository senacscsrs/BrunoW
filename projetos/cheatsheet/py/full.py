# MASTER CHEATSHEET PYTHON
# Tudo em um arquivo, comentários em português, seções separadas.
# Comentários explicativos curtos, exemplos práticos e outputs.

# =======================
# VARIÁVEIS
# =======================
# variáveis armazenam valores dinamicamente tipados
nome = "Bruno"
idade = 16
saldo = 100.50
ativo = True

print(nome)
#output
# Bruno

# atribuição múltipla
a, b, c = 1, 2, 3
print(a, b, c)
#output
# 1 2 3

# Variáveis podem mudar de tipo
x = 5
x = "agora string"
print(x)
#output
# agora string

# =======================
# TIPOS DE DADOS
# =======================
# principais tipos: str, int, float, bool, None, list, tuple, dict, set, bytes
s = "texto"
i = 10
f = 3.14
b = False
n = None
lista = [1, 2, 3]
tupla = (1, 2)
d = {"k": "v"}
conjunto = {1, 2}

print(type(s), type(i), type(f), type(b), type(n))
#output
# <class 'str'> <class 'int'> <class 'float'> <class 'bool'> <class 'NoneType'>

# conversões
print(int("5"), float("3.5"), str(10), bool(0))
#output
# 5 3.5 10 False

# =======================
# OPERADORES
# =======================
# Aritméticos: + - * / // % **
print(2 + 3, 5 - 2, 2 * 3, 7 / 2, 7 // 2, 7 % 2, 2 ** 3)
#output
# 5 3 6 3.5 3 1 8

# Atribuição: =, +=, -=, *=, /=, //=, **=
x = 5
x += 2
print(x)
#output
# 7

# Comparação: ==, !=, >, <, >=, <=
print(2 == 2, 2 != 3, 3 > 1)
#output
# True True True

# Lógicos: and, or, not
print(True and False, True or False, not True)
#output
# False True False

# Operador ternário (expressão condicional)
idade = 16
status = "maior" if idade >= 18 else "menor"
print(status)
#output
# menor

# None coalescing (operador padrão via or)
a = None
b = a or "valor padrao"
print(b)
#output
# valor padrao

# =======================
# FLUXO DE CONTROLE
# =======================
# if / elif / else
nota = 7
if nota >= 9:
    print("Excelente")
elif nota >= 6:
    print("Bom")
else:
    print("Precisa melhorar")
#output
# Bom

# match (Python 3.10+), similar a switch
valor = 2
match valor:
    case 1:
        print("um")
    case 2:
        print("dois")
    case _:
        print("outro")
#output
# dois

# break e continue em loops
for i in range(5):
    if i == 2:
        continue  # pula
    if i == 4:
        break     # sai
    print(i)
#output
# 0 1 3

# =======================
# LOOPS
# =======================
# for tradicional (iterável)
for i in range(3):
    print(i)
#output
# 0 1 2

# iterando lista
for item in ["a", "b", "c"]:
    print(item)
#output
# a b c

# while
c = 0
while c < 3:
    print(c)
    c += 1
#output
# 0 1 2

# loop com else
for i in range(3):
    print(i)
else:
    print("acabou")
#output
# 0 1 2 acabou

# =======================
# FUNÇÕES
# =======================
# declaração
def soma(a, b):
    return a + b

print(soma(2, 3))
#output
# 5

# parâmetros default
def cumprimenta(nome="amigo"):
    print("Olá", nome)

cumprimenta()
#output
# Olá amigo

# args / kwargs
def ex_args(*args, **kwargs):
    print("args:", args)
    print("kwargs:", kwargs)

ex_args(1, 2, a=3)
#output
# args: (1, 2)
# kwargs: {'a': 3}

# funções como objetos (passar como parâmetro)
def aplicar(fn, x):
    return fn(x)

print(aplicar(lambda v: v * 2, 5))
#output
# 10

# closures (função que "lembra" do ambiente)
def contador():
    count = 0
    def inc():
        nonlocal count
        count += 1
        return count
    return inc

c = contador()
print(c(), c())
#output
# 1 2

# funções de ordem superior (retornam/fazem funções)
def multiplicador(n):
    return lambda x: x * n

dobro = multiplicador(2)
print(dobro(5))
#output
# 10

# =======================
# LISTAS (arrays)
# =======================
# criar
l = [1, 2, 3]
vazia = []

# acessar
print(l[0], l[-1])
#output
# 1 3

# adicionar / remover
l.append(4)        # adiciona fim
l.insert(0, 0)     # insere índice
print(l.pop())     # remove último
l.remove(2)        # remove primeiro valor igual a 2

print(l)
#output
# 4 [0,1,3]

# slice (fatia) e cópia
arr = [1, 2, 3, 4]
fat = arr[1:3]     # [2,3]
copia = arr[:]     # copia
print(fat, copia)
#output
# [2, 3] [1, 2, 3, 4]

# concatenação
print([1, 2] + [3, 4])
#output
# [1, 2, 3, 4]

# comprehensions (essencial)
quad = [x * x for x in range(5)]
filt = [x for x in range(10) if x % 2 == 0]
print(quad, filt)
#output
# [0, 1, 4, 9, 16] [0, 2, 4, 6, 8]

# map / filter / reduce
from functools import reduce
print(list(map(lambda x: x * 2, [1, 2, 3])))
print(list(filter(lambda x: x > 1, [1, 2, 3])))
print(reduce(lambda a, b: a + b, [1, 2, 3]))
#output
# [2, 4, 6] [2, 3] 6

# enumerate e zip
for idx, val in enumerate(["a", "b"]):
    print(idx, val)
#output
# 0 a 1 b

for a, b in zip([1, 2], ["x", "y"]):
    print(a, b)
#output
# 1 x 2 y

# listas aninhadas e flatten simples
nested = [[1, 2], [3, 4]]
flat = [item for sub in nested for item in sub]
print(flat)
#output
# [1, 2, 3, 4]

# =======================
# TUPLAS
# =======================
t = (1, 2, 3)
print(t[0])
#output
# 1
# tuplas são imutáveis

# =======================
# DICIONÁRIOS (objects)
# =======================
d = {"nome": "Bruno", "idade": 16}
print(d["nome"])
#output
# Bruno

# métodos úteis
print(d.keys(), d.values(), d.items())
#output
# dict_keys(['nome', 'idade']) dict_values(['Bruno', 16]) dict_items([('nome', 'Bruno'), ('idade', 16)])

# adicionar/atualizar/remover
d["cidade"] = "Candelária"
d.update({"idade": 17})
print(d.pop("cidade"))
#output
# Candelária

# get com valor default
print(d.get("sobrenome", "NA"))
#output
# NA

# iteração
for k, v in d.items():
    print(k, v)
#output
# nome Bruno idade 17

# =======================
# SETS (conjuntos)
# =======================
s = {1, 2, 3}
s.add(4)
s.discard(2)
print(s)
#output
# {1, 3, 4}
# operações: union, intersection, difference

# =======================
# STRINGS
# =======================
txt = "  Olá Mundo  "
print(txt.strip())           # trim
print(txt.lower(), txt.upper())
print(txt.replace("Mundo", "Python"))
#output
# Olá Mundo
#   olá mundo    OLÁ MUNDO
#   Olá Python  

# f-strings (template literals)
nome = "Bruno"
print(f"Olá {nome}, {idade} anos")
#output
# Olá Bruno, 17 anos

# split / join
parts = "a,b,c".split(",")
print(parts, "-".join(parts))
#output
# ['a', 'b', 'c'] a-b-c

# =======================
# NÚMEROS & MATH
# =======================
import math
print(math.floor(4.7), math.ceil(4.1), round(4.5))
print(math.sqrt(16), math.pow(2, 3))
#output
# 4 5 4 4.0 8.0

import random
print(random.random(), random.randint(1, 10))
#output
# 0.123... 7

# =======================
# DATETIME
# =======================
from datetime import datetime, timedelta, date, time
agora = datetime.now()
print(agora)
#output
# 2025-xx-xx xx:xx:xx.xxxxxx

hoje = date.today()
amanha = hoje + timedelta(days=1)
print(hoje, amanha)
#output
# 2025-xx-xx 2025-xx-xx

# formatar
print(agora.strftime("%d/%m/%Y %H:%M:%S"))
#output
# 10/11/2025 17:00:00

# =======================
# ENTRADA E SAÍDA DE ARQUIVOS (automação essencial)
# =======================
# ler arquivo texto
with open("exemplo.txt", "w", encoding="utf-8") as f:
    f.write("linha1\nlinha2\n")

with open("exemplo.txt", "r", encoding="utf-8") as f:
    conteudo = f.read()
print(conteudo)
#output
# linha1
# linha2

# ler linha a linha
with open("exemplo.txt", "r", encoding="utf-8") as f:
    for linha in f:
        print(linha.strip())
#output
# linha1 linha2

# manipular caminhos com pathlib
from pathlib import Path
p = Path("exemplo.txt")
print(p.exists(), p.read_text(encoding="utf-8"))
#output
# True linha1\nlinha2\n

# copiar / mover / remover arquivos (shutil/os)
import shutil, os
shutil.copy("exemplo.txt", "exemplo_copy.txt")
os.remove("exemplo_copy.txt")

# CSV (importante para automação)
import csv
with open("dados.csv", "w", newline="", encoding="utf-8") as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(["nome", "idade"])
    writer.writerow(["Bruno", 16])

with open("dados.csv", "r", encoding="utf-8") as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        print(row["nome"], row["idade"])
#output
# Bruno 16

# JSON (essencial)
import json
obj = {"a": 1}
s = json.dumps(obj)
print(s)
#output
# {"a": 1}
print(json.loads(s)["a"])
#output
# 1

# =======================
# REQUISIÇÕES HTTP (automação)
# =======================
# urllib padrão
import urllib.request, urllib.parse
url = "https://jsonplaceholder.typicode.com/todos/1"
with urllib.request.urlopen(url) as resp:
    data = resp.read().decode("utf-8")
print(data[:100])
#output
# {"userId": 1, "id": 1, ...

# requests (mais simples, requer pip install requests)
# import requests
# res = requests.get(url)
# print(res.json())

# =======================
# SUBPROCESS (executar comandos, automação)
# =======================
import subprocess
result = subprocess.run(["echo", "hello"], capture_output=True, text=True)
print(result.stdout.strip())
#output
# hello

# cuidado com segurança ao executar comandos externos

# =======================
# ERROS E EXCEÇÕES
# =======================
try:
    1 / 0
except ZeroDivisionError as e:
    print("erro:", e)
except Exception as e:
    print("erro generico:", e)
finally:
    print("sempre executa")
#output
# erro: division by zero
# sempre executa

# lançar exceções
def valida(n):
    if n < 0:
        raise ValueError("n deve ser >= 0")
    return n

# =======================
# MÓDULOS E PACOTES
# =======================
# criar/modularizar: criar arquivo .py e importar
# importar padrão: import math
# importar nome: from math import sqrt
# pacotes: pasta com __init__.py
# instalar pacotes: pip install nome_pacote

# =======================
# CLASSES E ORIENTAÇÃO A OBJETOS (essencial)
# =======================
class Pessoa:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade

    def falar(self):
        print(f"Oi, sou {self.nome}")

p = Pessoa("Bruno", 16)
p.falar()
#output
# Oi, sou Bruno

# herança
class Aluno(Pessoa):
    def __init__(self, nome, idade, matricula):
        super().__init__(nome, idade)
        self.matricula = matricula

al = Aluno("A", 17, "123")
al.falar()
#output
# Oi, sou A

# =======================
# EXPRESSÕES LAMBDA E FUNÇÕES ANÔNIMAS
# =======================
f = lambda x, y: x + y
print(f(1, 2))
#output
# 3

# =======================
# COMPREHENSIONS AVANÇADAS
# =======================
d = {x: x * x for x in range(5)}
s = {x for x in range(5) if x % 2 == 0}
print(d, s)
#output
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16} {0, 2, 4}

# =======================
# REGEX BÁSICO
# =======================
import re
m = re.search(r"\d+", "abc123")
print(m.group())
#output
# 123

print(re.findall(r"\d+", "a1 b22 c333"))
#output
# ['1', '22', '333']

# =======================
# DEBUG E LOG
# =======================
print("mensagem")         # simples
import logging
logging.basicConfig(level=logging.INFO)
logging.info("info")
# para automação, prefira logging em vez de prints em scripts maiores

# =======================
# AMBIENTE E VARIÁVEIS
# =======================
# acessar variáveis de ambiente
print(os.environ.get("HOME", "NA"))
#output
# /home/usuario

# =======================
# UTILITÁRIOS IMPORTANTES PARA AUTOMAÇÃO
# =======================
# time.sleep
import time
time.sleep(0.1)

# shutil para copiar/pasta
# subprocess para rodar comandos
# pathlib para caminhos
# csv/json para dados tabulares e trocas
# urllib/requests para APIs

# =======================
# BOAS PRÁTICAS RÁPIDAS
# =======================
# - Use virtualenv/venv para projetos
# - Separe responsabilidades em módulos
# - Trate exceções previsíveis
# - Faça logging ao invés de prints em produção
# - Codifique em UTF-8 e explicit encoding quando ler/escrever arquivos
# - Evite executar comandos shell com dados não confiáveis

# =======================
# FIM DO CHEATSHEET PYTHON
# =======================
# Observação: arquivo focado em essenciais + automação.
# Pratique reescrevendo scripts que automatizem tarefas reais:
# leitura de CSV → transformação → gravar JSON / chamar API / mover arquivos.
