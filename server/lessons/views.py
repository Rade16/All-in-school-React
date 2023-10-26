from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import ensure_csrf_cookie
from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Lesson, PastLesson
from .serializers import LessonSerializer
from auth_sys.models import Profile
from courses.models import Course


@login_required(login_url='home')
def lesson(request, id):
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

        data = {'next_lesson_id': '', 'is_final_lesson': False}
        data.update(serializer.data)

        course = lesson.course
        courseLessons = course.lesson_set.all().order_by('number')
        thisLessonIndex = list(courseLessons).index(lesson)

        if thisLessonIndex + 1 < len(courseLessons):
            nextLessonId = courseLessons[thisLessonIndex + 1].id
            data['next_lesson_id'] = nextLessonId
        else:
            data['is_final_lesson'] = True

        return Response(data, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_403_FORBIDDEN)


@api_view(['POST'])
@ensure_csrf_cookie
def addPastLesson(request):
    if request.method == 'POST':
        user = User.objects.get(pk=request.user.id)
        lesson = Lesson.objects.get(pk=request.data['lessonId'])

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
