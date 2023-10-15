from django.shortcuts import render
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

@api_view(['GET'])
def getCourses(request):
    courses = Course.objects.all()
    serializer = CourseSerializer(courses, many=True)
    return Response(serializer.data)