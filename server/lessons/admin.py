import os
from django.contrib import admin
from .models import Lesson


class LessonAdmin(admin.ModelAdmin):
    fieldsets = [
        ('Курс', {'fields': ['course']}),
        ('Информация по уроку', {'fields': ['number', 'name', 'description_title', 'text']}),
        ('Видео', {'fields': ['video']}),
    ]

    def delete_queryset(self, request, queryset):
        for obj in queryset:
            if obj.video:
                os.remove(obj.video.path)
            obj.delete()


admin.site.register(Lesson, LessonAdmin)