from cgitb import lookup
from django.db.models import Q
from rest_framework import serializers
from adminposts.models import *
from django.utils import timezone
from olaro.serializers import GameSerializer
from olaro.models import Game

class FAQSerializer(serializers.ModelSerializer):


	class Meta:
		model = FAQ
		fields = '__all__'


class PrivacyPolicySerializer(serializers.ModelSerializer):


	class Meta:
		model = PrivacyPolicy
		fields = '__all__'


class PostSerializer(serializers.HyperlinkedModelSerializer):

	url = serializers.HyperlinkedIdentityField( view_name='post-detail', lookup_field='slug' )
	day_to_publish = serializers.StringRelatedField()


	class Meta:
		model = Post
		fields = '__all__'
		lookup_field = 'slug' 


class DaySerializer(serializers.HyperlinkedModelSerializer):

	posts = serializers.SerializerMethodField('get_posts')
	games = serializers.SerializerMethodField('get_games')

	def get_games(self, day):
		try:
			qs = Game.objects.filter(day=day)
			serializer = GameSerializer(instance=qs, many=True, context=self.context)
			return serializer.data
		except:
			return None 

	def get_posts(self, day):
		try:
			qs = Post.objects.filter(day_to_publish=day).filter( Q( day_to_publish__date__lt=timezone.now().date()) | (Q( day_to_publish__date=timezone.now().date()) & Q(time_to_publish__lte=timezone.now().time())))
			serializer = PostSerializer(instance=qs, many=True, context=self.context)
			return serializer.data
		except:
			return None

	url = serializers.HyperlinkedIdentityField( view_name='day-detail', lookup_field='day' )


	class Meta:
		model = Day
		fields = [ 'url', 'day', 'date', 'posts', 'games']
		lookup_field = 'day'


class AllDaySerializer(serializers.HyperlinkedModelSerializer):
	url = serializers.HyperlinkedIdentityField( view_name='day-detail', lookup_field='day' )
	posts = PostSerializer(many=True)

	class Meta:
		model = Day
		fields = [ 'url', 'day', 'date', 'posts' ]
		lookup_field = 'day'


class DownloadableSerializer(serializers.HyperlinkedModelSerializer):

	url = serializers.HyperlinkedIdentityField( view_name='downloadable-detail', lookup_field='slug' )


	class Meta:
		model = Downloadable
		fields = '__all__'
		lookup_field = 'slug'


class MerchandiseSerializer(serializers.HyperlinkedModelSerializer):

	url = serializers.HyperlinkedIdentityField( view_name='merchandise-detail', lookup_field='slug' )


	class Meta:
		model = Merchandise
		fields = '__all__'
		lookup_field = 'slug'


class SponsorSerializer(serializers.HyperlinkedModelSerializer):
	url = serializers.HyperlinkedIdentityField(view_name='sponsor-detail', lookup_field='slug')

	class Meta:
		model = Sponsor
		fields = '__all__'
		lookup_field = 'slug'
class MailSerializer(serializers.Serializer):
	
	name = serializers.CharField()
	email = serializers.EmailField()
	subject = serializers.CharField()
	message = serializers.CharField()
	# def create(self, validate_data):
	# 	instance = super( MailSerializer, self).create( validate_data )

	# 	subject = self.subject + ' by ' + self.name
	# 	message = "Email: " + self.email + "\n\n" + self.message
	# 	recipient_list = ['mailertester20@gmail.com']

	# 	send_mail(
	# 		subject,
	# 		message,
	# 		self.email,
	# 		recipient_list,
	# 		fail_silently=False
	# 	)

	# 	return instance

class YugtoTalkSerializer(serializers.HyperlinkedModelSerializer):

	url = serializers.HyperlinkedIdentityField( view_name='yugto-detail', lookup_field='slug' )
	day_to_publish = serializers.StringRelatedField()


	class Meta:
		model = YugtoTalk
		fields = '__all__'
		lookup_field = 'slug' 
 
class AdminVideosSerializer(serializers.Serializer):
	url = serializers.HyperlinkedIdentityField(view_name='adminvideos-detail', lookup_field='slug')

	day_to_publish = serializers.StringRelatedField()
	class Meta:
		model = AdminVideos
		fields = '__all__'
		lookup_field = 'slug' 
