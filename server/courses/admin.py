import os
from django.contrib import admin
from .models import Course


class CourseAdmin(admin.ModelAdmin):
    list_display = ['name', 'price']
    fieldsets = [
        ('Информация о курсе', {'fields': ['name', 'price', 'image']}),
        ('Изображение заголовка страницы', {'fields': ['header_image']}),
        ('Изображения на странице', {'fields': ['about_image_1', 'about_image_2', 'about_image_3']}),
        ('Описание курса', {'fields': ['about_text_1', 'about_text_2']}),
        ('Что получит пользователь', {
            'fields': ['you_get_title_1', 'you_get_text_1', 'you_get_title_2', 'you_get_text_2', 'you_get_title_3',
                       'you_get_text_3']})
    ]
    search_fields = ['name']
    ordering = ['-price']

    def delete_queryset(self, request, queryset):
        for obj in queryset:
            os.remove(obj.image.path)
            obj.delete()


admin.site.register(Course, CourseAdmin)
