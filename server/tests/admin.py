from django.contrib import admin
from .models import Test, Question, Answer


class QuestionInline(admin.TabularInline):
    model = Question
    extra = 1


class AnswerInline(admin.TabularInline):
    model = Answer
    extra = 1


class TestAdmin(admin.ModelAdmin):
    list_display = ('name', 'lesson')
    inlines = (QuestionInline,)
    search_fields = ('name',)
    list_filter = ('lesson',)


class QustionAdmin(admin.ModelAdmin):
    list_display = ('text', 'test')
    inlines = (AnswerInline,)
    search_fields = ('text',)


class AnswerAdmin(admin.ModelAdmin):
    list_display = ('text', 'question', 'is_correct')
    search_fields = ('text',)
    list_filter = ('question', 'is_correct')


admin.site.register(Test, TestAdmin)
admin.site.register(Question, QustionAdmin)
admin.site.register(Answer, AnswerAdmin)
