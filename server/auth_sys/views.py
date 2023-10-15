from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Profile
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.db.utils import IntegrityError
from email_validator import validate_email, EmailNotValidError


@api_view(['POST'])
def signUp(request):
    if request.method == 'POST':
        data = list(request.data.values())

        for value in request.data.values():
            if not value:
                return Response({'status': 'Заполните все поля!'})

        second_name, first_name, last_name, username, email, password = data

        if ' ' in username:
            return Response({'status': 'В логине не должно быть пробелов!'})

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


@api_view(['GET'])
def logoutUser(request):
    logout(request)
    return Response(status=status.HTTP_200_OK)
