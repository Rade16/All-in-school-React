from django.shortcuts import render
from django.http import HttpResponse


def home(request):
    if request.user.is_authenticated:
        return render(request, 'user_menu.html')
    return render(request, 'guest_menu.html')
