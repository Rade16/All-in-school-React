import os
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import ensure_csrf_cookie
from django.contrib.auth import logout
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from auth_sys.models import Profile


@login_required(login_url='home')
def settings(request):
    return render(request, 'settings.html')


@api_view(['POST'])
@ensure_csrf_cookie
def deleteAccount(request):
    if request.method == 'POST':
        userId = request.user.id
        logout(request)

        user = User.objects.get(id=userId)
        profile = Profile.objects.get(user__id=user.id)
        if profile.photo:
            os.remove(profile.photo.path)
        user.delete()
        return Response(status=status.HTTP_200_OK)
