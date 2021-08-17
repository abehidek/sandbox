import requests
import json
print('This programs converts BRL into USD')
BRL = float(input('How much BRL you wanna convert into USD (dollars) ?: '))

# API Request

api_url = "https://economia.awesomeapi.com.br/last/USD-BRL"
response = requests.get(api_url)

# Fetching API Request
data = response.json()
info = data['USDBRL']
BRLvalue = float(info['high'])

# Showing
print('\n')
print('as for today , R${} equals approximately ${:.4}'.format(BRL, BRL/BRLvalue))
