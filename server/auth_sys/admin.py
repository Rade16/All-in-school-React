import os
from django.contrib import admin
from django.contrib.auth.models import Group
from .models import Profile


class AdminProfile(admin.ModelAdmin):
    list_display = ['user', 'first_name', 'second_name', 'last_name', 'telephone', 'gender']
    fieldsets = [
        ('Отношение к пользователю', {'fields': ['user']}),
        ('Основная информация', {'fields': ['first_name', 'second_name', 'last_name', 'gender']}),
        ('Второстепенная информация', {'fields': ['telephone', 'telegram', 'photo']})
    ]
    search_fields = ['user', 'telephone']
    list_filter = [('gender', admin.ChoicesFieldListFilter)]

    def delete_queryset(self, request, queryset):
        for obj in queryset:
            os.remove(obj.photo.path)
            obj.delete()


admin.site.register(Profile, AdminProfile)
admin.site.unregister(Group)
