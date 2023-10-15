from django.urls import path
from . import views

app_name = 'courses'
urlpatterns = [
    path('catalog/', views.catalog, name='catalog'),
    path('get-courses/', views.getCourses, name='get-courses')
]