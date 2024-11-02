from django.utils import timezone

from rest_framework import generics, permissions, renderers, viewsets

from .models import *
from .serializers import *

class GamesForTheDayViewSet(viewsets.ModelViewSet):
	queryset = Game.objects.filter(day__date = timezone.now().date())
	serializer_class = GameSerializer
	lookup_field = 'day'