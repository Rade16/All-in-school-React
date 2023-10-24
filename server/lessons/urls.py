from django.urls import path
from . import views

app_name = 'lessons'
urlpatterns = [
    path('lesson/<int:id>/', views.lesson, name='lesson'),
    path('get-lesson-info/', views.getLessonInfo, name='get-lesson-info'),
    path('add-past-lesson/', views.addPastLesson, name='add-past-lesson'),
    path('pased-lesson/', views.pasedLesson, name='pased-lesson'),
    path('get-pased-lesson/', views.getPasedLesson, name='get-pased-lesson')
]