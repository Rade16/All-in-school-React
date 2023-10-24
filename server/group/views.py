from django.shortcuts import render
from django.db.models import Q
from django.contrib.auth.decorators import login_required
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from auth_sys.models import Profile
from auth_sys.serializers import ProfileSerializer
from courses.models import Course


@login_required(login_url='home')
def group(request):
    return render(request, 'user_group.html')


@api_view(['GET'])
def getGroupOfUser(request):
    profile = Profile.objects.get(user__id=request.user.id)
    courses = profile.courses.all()

    profilesInCourses = Profile.objects.none()
    for course in courses:
        profiles = course.profile_set.filter(~Q(user__id=request.user.id))

        for profile in profiles:
            if profile not in list(profilesInCourses):
                profilesInCourses = profilesInCourses | profiles

    serializer = ProfileSerializer(profilesInCourses, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)
