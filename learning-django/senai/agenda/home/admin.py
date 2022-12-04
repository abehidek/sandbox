from django.contrib import admin

from home.models import Agenda

# Register your models here.


class detAgenda(admin.ModelAdmin):
    list_display = ("id", "nome", "data", "ativo", "preco")
    list_editable = ("ativo",)
    list_per_page: int = 15
    search_fields = ("nome",)
    list_display_links = ("nome",)


admin.site.register(Agenda, detAgenda)
