import os
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import Group, User
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
        pass


class UserAdmin(BaseUserAdmin):
    def delete_queryset(self, request, queryset):
        for obj in queryset:
            profile = Profile.objects.get(user__id=obj.id)

            if profile.photo:
                os.remove(profile.photo.path)
            obj.delete()


admin.site.unregister(Group)
admin.site.unregister(User)
admin.site.register(Profile, AdminProfile)
admin.site.register(User, UserAdmin)
