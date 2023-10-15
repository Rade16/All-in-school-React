from django.shortcuts import render


def home(request):
    context = {'type': 'no-auth'}
    if request.user.is_authenticated:
        context = {'type': 'auth'}

    return render(request, 'menu.html', context=context)
