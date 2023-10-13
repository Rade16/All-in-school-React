from django.contrib import admin
from django.contrib.auth.models import Group
from .models import Profile


class AdminProfile(admin.ModelAdmin):
    list_display = ['user', 'first_name', 'second_name', 'last_name', 'telephone']
    fieldsets = [
        ('Отношение к пользователю', {'fields': ['user']}),
        ('Основная информация', {'fields': ['first_name', 'second_name', 'last_name', 'gender']}),
        ('Второстепенная информация', {'fields': ['telephone', 'photo']})
    ]
    search_fields = ['user', 'telephone']


admin.site.register(Profile, AdminProfile)
admin.site.unregister(Group)
