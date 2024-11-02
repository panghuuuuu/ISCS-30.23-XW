from rest_framework import serializers
from .models import *

from django.utils import timezone


class GameSerializer(serializers.ModelSerializer):
	
	class Meta:
		model = Game
		fields = ['title', 'points', 'participants', 'description']