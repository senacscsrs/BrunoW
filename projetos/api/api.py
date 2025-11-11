#======================================#
#        FREE USEFUL APIs CHEATSHEET   #
#======================================#
# Lista de APIs gratuitas úteis
# para automação, testes e projetos pessoais
# estilo Python, explicativo e direto
#======================================#

#--------------------------------------#
# 🔹 Dados Públicos / Utilidades
#--------------------------------------#

# JSONPlaceholder - fake REST API
# permite testar CRUD de posts, users, comments

import requests

res = requests.get("https://jsonplaceholder.typicode.com/posts/1")
print(res.json())
#output
# {'userId': 1, 'id': 1, 'title': '...', 'body': '...'}

# HTTPBin - testar requisições HTTP
res = requests.get("https://httpbin.org/get")
print(res.json())

# ReqRes - fake API com CRUD de usuários
res = requests.get("https://reqres.in/api/users/2")
print(res.json())


#--------------------------------------#
# 🔹 Clima / Tempo
#--------------------------------------#

# OpenWeatherMap - previsão do tempo
API_KEY = "SUA_CHAVE"
city = "London"
res = requests.get(f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}")
print(res.json())
#output exemplo
# {'weather': [{'id': 800, 'main': 'Clear', 'description': 'clear sky'}], 'main': {...}}


# MetaWeather - clima sem autenticação
res = requests.get("https://www.metaweather.com/api/location/44418/")
print(res.json())


#--------------------------------------#
# 🔹 Criptomoedas / Finanças
#--------------------------------------#

# CoinGecko - preço de criptomoedas
res = requests.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")
print(res.json())
#output {'bitcoin': {'usd': 55000}}

# ExchangeRate API - conversão de moedas
API_KEY = "SUA_CHAVE"
res = requests.get(f"https://v6.exchangerate-api.com/v6/{API_KEY}/latest/USD")
print(res.json())


#--------------------------------------#
# 🔹 Notícias / Conteúdo
#--------------------------------------#

# NewsAPI - notícias globais
API_KEY = "SUA_CHAVE"
res = requests.get(f"https://newsapi.org/v2/top-headlines?country=us&apiKey={API_KEY}")
print(res.json()['articles'][0])
#output exemplo
# {'source': {...}, 'title': '...', 'description': '...'}


#--------------------------------------#
# 🔹 Entretenimento / Diversão
#--------------------------------------#

# PokéAPI - dados de Pokémon
res = requests.get("https://pokeapi.co/api/v2/pokemon/charizard")
print(res.json()['name'])
#output
# charizard

# TheCocktailDB - receitas de drinks
res = requests.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
print(res.json()['drinks'][0]['strDrink'])
#output
# Margarita

# JokeAPI - piadas
res = requests.get("https://v2.jokeapi.dev/joke/Any?type=single")
print(res.json()['joke'])


#--------------------------------------#
# 🔹 IA / Machine Learning
#--------------------------------------#

# OpenAI API - textos e imagens
# pip install openai
import openai

openai.api_key = "SUA_CHAVE"

res = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[{"role": "user", "content": "Escreva uma piada sobre programação"}]
)
print(res['choices'][0]['message']['content'])


#--------------------------------------#
# 🔹 Geolocalização / Mapas
#--------------------------------------#

# OpenStreetMap / Nominatim - buscar coordenadas
res = requests.get("https://nominatim.openstreetmap.org/search?q=London&format=json")
print(res.json()[0]['lat'], res.json()[0]['lon'])
#output
# 51.5073219 -0.1276474


#--------------------------------------#
# 🔹 Diversos Úteis
#--------------------------------------#

# ipify - descobrir IP público
res = requests.get("https://api.ipify.org?format=json")
print(res.json()['ip'])
#output
# 123.45.67.89

# Agify - idade estimada pelo nome
res = requests.get("https://api.agify.io/?name=Bruno")
print(res.json()['age'])
#output
# 26

# Genderize - gênero estimado pelo nome
res = requests.get("https://api.genderize.io/?name=Bruno")
print(res.json()['gender'])
#output
# male

# Fun Translations - traduções engraçadas
res = requests.get("https://api.funtranslations.com/translate/yoda.json?text=Hello world")
print(res.json()['contents']['translated'])
#output
# "World, hello"
