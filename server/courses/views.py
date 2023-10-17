from django.shortcuts import render
from django.views.decorators.csrf import ensure_csrf_cookie
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import CourseSerializer
from .models import Course


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
def getCourses(request):
    courses = Course.objects.all()
    serializer = CourseSerializer(courses, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
@ensure_csrf_cookie
def getCourseInfo(request):
    if request.method == 'POST':
        course = Course.objects.get(pk=request.data['id'])
        serializer = CourseSerializer(course)
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_403_FORBIDDEN)