from django.db.models import Q
from rest_framework import serializers
from blockinfo.models import *
from django.utils import timezone

class BlockInfoSerializer(serializers.ModelSerializer):

	class Meta:
		model = BlockInfo
		fields = '__all__'


# class BlockScoreSerializer(serializers.ModelSerializer):

# 	class Meta:
# 		model = BlockInfo
# 		fields = ['block', 'score']
# 		# Sort by score descending
		

class StudentEntrySerializer(serializers.ModelSerializer):

	class Meta:
		model = StudentEntry
		fields = ['qr_code']
class StudentToBlockSerializer(serializers.HyperlinkedModelSerializer):
	
	# id_number = serializers.HyperlinkedIdentityField( view_name='student-detail', lookup_field='id_number' )\
	user = serializers.StringRelatedField()
	block_info = serializers.SerializerMethodField( 'get_block_info' )
	entry_info = serializers.SerializerMethodField( 'get_entry_info' )

	def get_block_info(self, student):
		try:
			qs = BlockInfo.objects.get( block=student.block )
			serializer = BlockInfoSerializer( instance=qs, context=self.context )

			return serializer.data
		except:
			return None

	def get_entry_info(self, student):
		try:
			qs = StudentEntry.objects.get(student=student)
			serializer = StudentEntrySerializer( instance=qs, context=self.context )

			return serializer.data
		except:
			return None

	class Meta:
		model = Student
		fields = [ 'id_number', 'user', 'name', 'course', 'block_info', 'entry_info', 'entry_pass', 'school']
