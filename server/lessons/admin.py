from django.contrib import admin
from .models import Lesson


class LessonAdmin(admin.ModelAdmin):
    fieldsets = [
        ('Курс', {'fields': ['course']}),
        ('Информация по уроку', {'fields': ['number', 'name', 'description_title', 'text']}),
        ('Видео', {'fields': ['video']}),
    ]


admin.site.register(Lesson, LessonAdmin)