from rest_framework import serializers
from .models import *

class ParticipantSerializer(serializers.ModelSerializer):

	class Meta:
		model = Participant
		fields = '__all__'