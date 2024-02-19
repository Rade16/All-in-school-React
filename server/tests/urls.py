from django.urls import path
from . import views


app_name = 'tests'
urlpatterns = [
    path('get-test-result/', views.GetTestResult.as_view(), name='get-test-result')
]