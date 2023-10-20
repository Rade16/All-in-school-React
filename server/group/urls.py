from django.urls import path
from . import views

app_name = 'group'
urlpatterns = [
    path('group/', views.group, name='group'),
    path('get-group-of-user/', views.getGroupOfUser, name='get-group-of-user')
]