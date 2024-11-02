from django.http import HttpResponse, JsonResponse
from django.contrib.admin.views.decorators import *
from django.shortcuts import render
from django.utils import timezone
from django.conf import settings
from rest_framework.decorators import permission_classes

from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt

from rest_framework import status
from rest_framework import generics, permissions, renderers, viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from rest_framework.exceptions import MethodNotAllowed


from datetime import datetime

from blockinfo.models import *
from blockinfo.serializers import *
from .permissions import IsOwner

import json


@api_view(['GET'])
def api_root(request, format=None):
    return Response(
        {
            'students': reverse('student-list', request=request, format=format),
            'links': reverse('link-list', request=request, format=format),
            'block-info': reverse(
                'student-to-link-list', request=request, format=format
            ),
        }
    )


class StudentsViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentToBlockSerializer
    lookup_field = 'id_number'
    permission_classes = [IsOwner]

    def list(self, request, *args, **kwargs):
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    def create(self, request, *args, **kwargs):
        raise MethodNotAllowed('POST')

    def perform_create(self, serializer):
        serializer.save()

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        # checks if the object staus is empty
        if object.status == "" or object.status is None:
            raise serializers.ValidationError("your error message")
        return super(StudentsViewSet, self).update(request, *args, **kwargs)


class LinksViewSet(viewsets.ModelViewSet):
    queryset = BlockInfo.objects.all()
    serializer_class = BlockInfoSerializer
    permission_classes = [permissions.IsAuthenticated]


class StudentEntryViewSet(viewsets.ModelViewSet):
    queryset = StudentEntry.objects.all()
    serializer_class = StudentEntrySerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    lookup_field = 'student'

    def perform_create(self, serializer):
        serializer.save()

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        # checks if the object staus is empty
        if object.status == "" or object.status is None:
            raise serializers.ValidationError("your error message")
        return super(StudentEntryViewSet, self).update(request, *args, **kwargs)


# class BlockScoreViewSet(viewsets.ModelViewSet):
#     queryset = BlockInfo.objects.all().order_by('-score')
#     serializer_class = BlockScoreSerializer
#     permission_classes = [permissions.IsAuthenticatedOrReadOnly]


@csrf_exempt
def get_id_via_email(request):
    if request.method == 'POST':
        print(request.user)
        body = json.loads(request.body.decode('utf-8'))
        user = User.objects.get(username=body['email'])
        student = Student.objects.get(user=user)
        data = {
            'id_number': student.id_number,
            'email': student.user.username,
            'name': student.name,
        }
        return JsonResponse(data)


@csrf_exempt
def send_data_to_sheets(request):
    if request.method == 'POST':
        body = json.loads(request.body.decode('utf-8'))
        print(body)
        identifier = body['id']
        user = User.objects.get(username=body['email'])

        if user.is_staff:
            query = StudentEntry.objects.get(identifier=identifier)
            if query:
                append_range(query, user)
                data = {
                    'id_number': query.student.id_number,
                    'name': query.student.name,
                    'block': query.student.block,
                    'email': query.student.user.username,
                    'date_of_entry': query.date.date,
                }
                return JsonResponse(data)
    return JsonResponse({"Error": "Invalid access."}, status=403)


# class StudentToLinksViewSet(viewsets.ModelViewSet):
# 	queryset = Student.objects.all()
# 	serializer_class = StudentToBlockSerializer
# 	lookup_field = 'id_number'
# 	permission_classes = [permissions.IsAuthenticatedOrReadOnly,]

# 	def perform_create(self, serializer):
# 		serializer.save()

# 	def update(self, request, *args, **kwargs):
# 		instance = self.get_object()
# 		# checks if the object staus is empty
# 		if object.status == "" or object.status is None :
# 			raise serializers.ValidationError("your error message")
# 		return super(DayViewSet, self).update(request, *args, **kwargs)

