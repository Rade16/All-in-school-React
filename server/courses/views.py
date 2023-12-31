from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import ensure_csrf_cookie
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import CourseSerializer
from .models import Course
from auth_sys.models import Profile
from lessons.models import PastLesson


def catalog(request):
    context = {'type': 'no-auth'}
    if request.user.is_authenticated:
        context['type'] = 'auth'

    return render(request, 'catalog.html', context=context)


def course(request, pk):
    context = {'dataId': pk, 'type': 'no-auth'}
    if request.user.is_authenticated:
        context['type'] = 'auth'

    return render(request, 'course.html', context=context)


@api_view(['GET'])
def getFreshCourses(request):
    courses = Course.objects.all().order_by('upload_date')[:4]
    serializer = CourseSerializer(courses, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@login_required(login_url='home')
def userCourses(request):
    return render(request, 'user_courses.html')


@api_view(['GET'])
def getCourses(request):
    courses = Course.objects.all()
    data = []

    for course in courses:
        if course.lesson_set.all().count() > 0:
            serializer = CourseSerializer(course)
            data.append(serializer.data)

    return Response(data, status=status.HTTP_200_OK)


@api_view(['POST'])
@ensure_csrf_cookie
def getCourseInfo(request):
    if request.method == 'POST':
        course = Course.objects.get(pk=request.data['id'])
        serializer = CourseSerializer(course)
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_403_FORBIDDEN)


@api_view(['POST'])
@ensure_csrf_cookie
def addUserToCourse(request):
    if request.method == 'POST':
        course = Course.objects.get(pk=request.data['courseId'])
        profile = Profile.objects.get(user__id=request.user.id)
        profile.courses.add(course)
        return Response(status=status.HTTP_200_OK)
    return Response(status=status.HTTP_403_FORBIDDEN)


@api_view(['GET'])
def getUserCourses(request):
    profile = Profile.objects.get(user__id=request.user.id)
    courses = profile.courses.all()
    serializer = CourseSerializer(courses, many=True)

    massiveOfData = []
    for i in serializer.data:
        data = dict(i)
        data.update({'stoped_lesson_id': ''})

        course = Course.objects.get(pk=data['id'])
        courseLessons = course.lesson_set.all()
        pastLessonsId = []

        for lesson in courseLessons:
            pastLessons = PastLesson.objects.filter(user__id=request.user.id, lesson__id=lesson.id)

            if pastLessons.exists():
                pastLessonsId.append(pastLessons[0].lesson.id)

        if pastLessonsId:
            try:
                data['stoped_lesson_id'] = course.lesson_set.exclude(id__in=pastLessonsId).order_by('number')[0].id
                massiveOfData.append(data)
            except IndexError:
                pass
        else:
            lessonSet = course.lesson_set.all()
            if lessonSet.count() > 0:
                data['stoped_lesson_id'] = lessonSet[0].id
                massiveOfData.append(data)
    return Response(massiveOfData, status=status.HTTP_200_OK)
