from django.http import HttpRequest
from django.shortcuts import render

from home.models import Agenda

# Create your views here.


def index(request: HttpRequest):
    # dados = Agenda.objects.all()
    # gte -> great than or equal
    # gt -> great than
    # lte -> lower than or equal
    # lt -> lower than
    dados = Agenda.objects.filter(preco__lt=4000)
    context = {"agenda": dados}
    return render(request, "./home/index.html", context=context)
