from django.shortcuts import render


def home(request):
    if request.user.is_authenticated:
        return render(request, 'user_menu.html')
    return render(request, 'guest_menu.html')
