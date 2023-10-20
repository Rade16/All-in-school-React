from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import SiteInfo
from .serializers import SiteInfoSerializer


def home(request):
    context = {'type': 'no-auth'}
    if request.user.is_authenticated:
        context['type'] = 'auth'

    return render(request, 'menu.html', context=context)

@api_view(['GET'])
def getSiteInfo(request):
    siteInfo = SiteInfo.objects.all()[0]
    serializer = SiteInfoSerializer(siteInfo)
    return Response(serializer.data, status=status.HTTP_200_OK)