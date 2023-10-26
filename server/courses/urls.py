from django.urls import path
from . import views

app_name = 'courses'
urlpatterns = [
    path('catalog/', views.catalog, name='catalog'),
    path('get-courses/', views.getCourses, name='get-courses'),
    path('get-fresh-courses/', views.getFreshCourses, name='get-fresh-courses'),
    path('course/<int:pk>', views.course, name='course'),
    path('get-course-info/', views.getCourseInfo, name='get-course-info'),
    path('add-user-to-course/', views.addUserToCourse, name='add-user-to-course'),
    path('user-courses/', views.userCourses, name='user-courses'),
    path('get-user-courses/', views.getUserCourses, name='get-user-courses')
]