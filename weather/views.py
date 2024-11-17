from django.shortcuts import render

import requests
from django.shortcuts import render
from .forms import CityForm

def weather_view(request):
    weather_data = {}
    if request.method == 'POST':
        form = CityForm(request.POST)
        if form.is_valid():
            city = form.cleaned_data['city']
            api_key = '3dc77ec0bd3a4871b3c205009241909'
            url = f'https://api.weatherapi.com/v1/current.json?key={api_key} &q={city}'
            response = requests.get(url)
            weather_data = response.json()
            print(weather_data)
    else:
        form = CityForm()

    return render(request, 'index.html', {'form': form, 'weather_data': weather_data})

