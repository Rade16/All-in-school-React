from django.shortcuts import render
from django.views.decorators.csrf import ensure_csrf_cookie
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Profile
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.db.utils import IntegrityError
from email_validator import validate_email, EmailNotValidError


@api_view(['POST'])
@ensure_csrf_cookie
def signUp(request):
    if request.method == 'POST':
        data = list(request.data.values())

        for value in request.data.values():
            if ' ' in value:
                return Response({'status': 'Укажите данные без пробелов!'})

            if not value:
                return Response({'status': 'Заполните все поля!'})

        second_name, first_name, last_name, username, email, password = data
        try:
            emailinfo = validate_email(email)
            email = emailinfo.normalized
        except EmailNotValidError:
            return Response({'status': 'Недействительный E-mail!'})

        try:
            user = User.objects.create_user(username=username, email=email, password=password)
        except IntegrityError:
            return Response({'status': 'Логин уже занят!'})

        Profile.objects.create(user=user, first_name=first_name, second_name=second_name, last_name=last_name)

        return Response({'status': 'Аккаунт создан!'}, status=status.HTTP_201_CREATED)
    return Response(status=status.HTTP_403_FORBIDDEN)


@api_view(['POST'])
@ensure_csrf_cookie
def signIn(request):
    if request.method == 'POST':
        for value in request.data.values():
            if not value:
                return Response({'status': 'Заполните все поля!'})

        user = authenticate(request, username=request.data['username'], password=request.data['password'])
        if user is not None:
            login(request, user)
            return Response({'status': 'ok'})
        else:
            return Response({'status': 'Пользователь не найден!'})
    return Response(status=status.HTTP_403_FORBIDDEN)


@api_view(['POST'])
@ensure_csrf_cookie
def logoutUser(request):
    if request.method == 'POST':
        logout(request)
        return Response(status=status.HTTP_200_OK)
    return Response(status=status.HTTP_403_FORBIDDEN)
