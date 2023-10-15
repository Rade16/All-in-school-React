import os
from django.contrib import admin
from .models import Course


class CourseAdmin(admin.ModelAdmin):
    list_display = ['name', 'price']
    fieldsets = [
        ('Информация о курсе', {'fields': ['name', 'price', 'image']})
    ]
    search_fields = ['name']
    ordering = ['-price']

    def delete_queryset(self, request, queryset):
        for obj in queryset:
            os.remove(obj.image.path)
            obj.delete()


admin.site.register(Course, CourseAdmin)
