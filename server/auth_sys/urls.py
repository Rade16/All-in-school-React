from django.urls import path
from . import views

app_name = 'auth_sys'
urlpatterns = [
    path('sign-up/', views.signUp, name='sign-up'),
    path('sign-in/', views.signIn, name='sign-in'),
    path('logout-user/', views.logoutUser, name='logoutUser'),
    path('profile-settings/', views.profileSettings, name='profile-settings'),
    path('get-profile-settings/', views.getProfileSettings, name='get-profile-settings'),
    path('change-profile-photo/', views.changeProfilePhoto, name='change-profile-photo'),
    path('change-profile-settings/', views.chageProfileSettings, name='change-profile-settings')
]
