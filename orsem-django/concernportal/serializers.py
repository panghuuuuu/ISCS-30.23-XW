from django.db.models import Q
from rest_framework import serializers
from .models import *
from blockinfo.models import *
from blockinfo.serializers import *
from django.utils import timezone
from django.contrib.auth.models import User

class FullConcernSerializer(serializers.ModelSerializer):

	user = serializers.StringRelatedField()
	class Meta:
		model = Concern
		fields = '__all__'
		
class ConcernSerializer(serializers.ModelSerializer):

	class Meta:
		model = Concern
		fields = ['created_on', 'title', 'message', 'response']


class UserConcernsSerializer(serializers.ModelSerializer):
	
	username = serializers.StringRelatedField()
	concerns = serializers.SerializerMethodField('get_concerns')

	def get_concerns(self, user):
		try:
			qs = Concern.objects.filter(user=user).order_by('-created_on')
			serializer = ConcernSerializer(instance=qs, many=True, context=self.context)
			return serializer.data
		except:
			return None

	class Meta:
		model = User
		fields = ['username', 'concerns']
