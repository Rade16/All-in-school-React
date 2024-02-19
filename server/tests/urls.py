from django.urls import path
from . import views


app_name = 'tests'
urlpatterns = [
    path('tests/', views.tests, name='tests'),
    path('get-test-result/', views.TestsView.as_view(), name='get-test-result'),
    path('get-tests/', views.TestsView.as_view(), name='get-tests'),
    path('tests-results/<int:id>/', views.testResult, name='tests-results'),
    path('test-result/<int:id>/', views.TestResult.as_view(), name='test-result'),
]