from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Test, Question, Answer, PassedTest


class GetTestResult(APIView):
    def post(self, request, format=None):
        data = request.data
        test = Test.objects.get(pk=data.get('test_id'))
        points = 0

        for questionId in data.get('questions'):
            questionAnswers = Question.objects.get(pk=questionId).answer_set.all()

            for answer in questionAnswers:
                if answer.is_correct:
                    correctAnswerId = answer.id

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
