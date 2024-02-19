import os
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import Group, User
from .models import Profile


class AdminProfile(admin.ModelAdmin):
    list_display = ['user', 'first_name', 'second_name', 'last_name', 'telephone', 'gender', 'type']
    fieldsets = [
        ('Отношение к пользователю', {'fields': ['user']}),
        ('Основная информация', {'fields': ['first_name', 'second_name', 'last_name', 'type']}),
        ('Второстепенная информация', {'fields': ['gender', 'telephone', 'telegram', 'photo']})
    ]
    search_fields = ['user', 'telephone', 'second_name']
    list_filter = [('gender', admin.ChoicesFieldListFilter), ('type', admin.ChoicesFieldListFilter)]

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
