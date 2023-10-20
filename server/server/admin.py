from django.contrib import admin
from .models import SiteInfo

class SiteInfoAdmin(admin.ModelAdmin):
    fieldsets = [
        ('Ссылка на группу в телеграмме', {'fields': ['url_to_telegram']})
    ]

admin.site.register(SiteInfo, SiteInfoAdmin)