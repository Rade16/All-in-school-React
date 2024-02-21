from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.decorators import login_required
from rest_framework import status
from .models import Test, Question, Answer, PassedTest
from .serializer import TestSerializer
from django.contrib.auth.models import User
from auth_sys.models import Profile


@login_required(login_url='auth_sys:sign-in')
def tests(request):
    if request.user.profile.type == Profile.teacher:
        return render(request, 'tests.html')
    return HttpResponse(status=403)

@login_required(login_url='auth_sys:sign-in')
def testResult(request, id):
    if request.user.profile.type == Profile.teacher:
        return render(request, 'testsResults.html', {'dataId': id})
    return HttpResponse(status=403)


class TestsView(APIView):
    def put(self, request, format=None):
        data = request.data
        test = Test.objects.get(pk=data.get('test_id'))
        points = 0

        for questionId in data.get('questions'):
            correctAnswerId = Question.objects.get(pk=questionId).answer_set.all().get(is_correct=True).id

            if data.get('questions').get(questionId) == correctAnswerId:
                points += 1

        if test.mark_three_from > points:
            mark = 2
        if test.mark_three_from <= points:
            mark = 3
        if test.mark_four_from <= points:
            mark = 4
        if test.mark_five_from <= points:
            mark = 5

        PassedTest.objects.create(user=request.user, test=test, mark=mark)
        return Response(status=status.HTTP_200_OK)

    def post(self, request, format=None):
        name = request.data.get("name")
        tests = Test.objects.filter(name__icontains=name) if name else Test.objects.all()
        data = TestSerializer(tests, many=True)

        return Response(data.data, status=status.HTTP_200_OK)


class TestResult(APIView):
    def get(self, request, id):
        tests = PassedTest.objects.filter(test__id=id)
        data = []

        for test in tests:
            user = User.objects.get(pk=test.user.id)
            userFullName = user.profile.get_full_name()

            data.append({'mark': test.mark, 'username': userFullName})
        return Response(data, status=status.HTTP_200_OK)
