from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import ensure_csrf_cookie
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Lesson, PastLesson
from .serializers import LessonSerializer
from auth_sys.models import Profile
from courses.models import Course
from tests.models import Test, PassedTest


@login_required(login_url='home')
def lesson(request, id):
    modyfied = False
    try:
        while not PastLesson.objects.filter(lesson_id=id - 1) and Lesson.objects.get(pk=id).number > 1:
            id -= 1
            modyfied = True
    except Lesson.DoesNotExist:
        return HttpResponse(status=404)

    if modyfied:
        return redirect('lessons:lesson', id=id)
    return render(request, 'lesson.html', context={'lessonId': id})


@login_required(login_url='home')
def pasedLesson(request):
    return render(request, 'pased_lesson.html')


@api_view(['POST'])
@ensure_csrf_cookie
def getLessonInfo(request):
    if request.method == 'POST':
        lesson = Lesson.objects.get(pk=request.data['lessonId'])
        serializer = LessonSerializer(lesson)

        data = {'next_lesson_id': '', 'is_final_lesson': False,
                'test': {'passed': False, 'mark': None, 'status': False, 'questions': []}}
        data.update(serializer.data)

        course = lesson.course
        courseLessons = course.lesson_set.all().order_by('number')
        thisLessonIndex = list(courseLessons).index(lesson)

        try:
            test = Test.objects.filter(lesson__id=lesson.id)
            if test:
                test = test.first()
                data['test'].update({'test_id': test.id, 'name': test.name, 'status': True})

                for question in test.question_set.all():
                    data['test']['questions'].append(
                        {'question_id': question.id, 'question_text': question.text, 'answers': []})

                    for answer in question.answer_set.all():
                        data['test']['questions'][-1]['answers'].append(
                            {'answer_id': answer.id, 'answer_text': answer.text})

                passedTest = PassedTest.objects.get(test__id=test.id, user__id=request.user.id)
                if passedTest:
                    data['test']['passed'] = True
                    data['test']['status'] = False
                    data['test']['mark'] = passedTest.mark

            if thisLessonIndex + 1 < len(courseLessons):
                nextLessonId = courseLessons[thisLessonIndex + 1].id
                data['next_lesson_id'] = nextLessonId
            else:
                data['is_final_lesson'] = True
        except PassedTest.DoesNotExist:
            pass

        return Response(data, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_403_FORBIDDEN)


@api_view(['POST'])
@ensure_csrf_cookie
def addPastLesson(request):
    if request.method == 'POST':
        user = User.objects.get(pk=request.user.id)
        lesson = Lesson.objects.get(pk=request.data['lessonId'])

        if not PastLesson.objects.filter(user=user, lesson=lesson, course=lesson.course):
            PastLesson.objects.create(user=user, lesson=lesson, course=lesson.course)
        return Response(status=status.HTTP_200_OK)
    return Response(status=status.HTTP_403_FORBIDDEN)


@api_view(['GET'])
def getPasedLesson(request):
    mainData, courses = [], []
    pastLessons = PastLesson.objects.filter(user__id=request.user.id)

    for pastLesson in pastLessons:
        if pastLesson.course not in courses:
            courses.append(pastLesson.course)

    for course in courses:
        data = {'course_name': course.name, 'lessons': []}
        passedLessons = PastLesson.objects.filter(user__id=request.user.id, course_id=course.id)

        for passedLesson in passedLessons:
            data['lessons'].append({'id': passedLesson.lesson.id, 'name': passedLesson.lesson.name})

        mainData.append(data)
    return Response(mainData, status=status.HTTP_200_OK)
