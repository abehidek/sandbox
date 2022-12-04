print('This program converts your temperature from Celsius (°C) to Fahrenheit (°F)')
celsius_temperature = float(input('Type your temperature in Celsius (°C): '))
# (0°C × 9/5) + 32 = 32°F
fahrenheit_temperature = celsius_temperature * (9/5) + 32

print('The temperature of {}°C converted to fahrenheit is {}°F'.format(celsius_temperature, fahrenheit_temperature))
