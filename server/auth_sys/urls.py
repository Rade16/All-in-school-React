from django.urls import path
from . import views

app_name = 'auth_sys'
urlpatterns = [
    path('sign-up/', views.signUp, name='sign-up'),
    path('sign-in/', views.signIn, name='sign-in'),
    path('logout-user/', views.logoutUser, name='logoutUser'),
]
