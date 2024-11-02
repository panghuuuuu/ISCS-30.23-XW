from django.shortcuts import render
from .models import *

from .serializers import *
from rest_framework import generics, permissions, renderers, viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

class ParticipantViewSet(viewsets.ModelViewSet):
	queryset = Participant.objects.all()
	serializer_class = ParticipantSerializer
	permission_classes = [permissions.IsAuthenticatedOrReadOnly]