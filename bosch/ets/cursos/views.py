from django.http import HttpRequest, HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request: HttpRequest):
    # return HttpResponse('<h1> Cursor ETS </h1>')
    return render(request, 'index.html')