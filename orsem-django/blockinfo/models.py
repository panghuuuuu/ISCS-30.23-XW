from django.db import models
from django.contrib.auth.models import User
from django.core.files import File
from django.conf import settings

import os
import uuid

from datetime import datetime
from .functions import *

class Student(models.Model):
	id_number = models.IntegerField()
	email = models.EmailField(default="sample@gmail.com")
	name = models.CharField(max_length=128, default="Jose Rizal")
	block = models.CharField( max_length = 5 )
	course = models.CharField( max_length=32, default="AB AM" )
	school = models.CharField(max_length=32, default="SOM")
	user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True, related_name='student')
	entry_pass = models.URLField(default="https://google.com/entry_pass")

	def __str__(self):
		return str(self.id_number)

	def __repr__(self):
		return str(self.id_number)
		
	
	class Meta:
		ordering = [ 'id_number' ]


class BlockInfo(models.Model):
	block = models.CharField( max_length=5 )
	onsite_time_start = models.DateTimeField(verbose_name="Onsite Time Start", null=True)
	onsite_time_end = models.TimeField(verbose_name="Onsite Time End", null=True)
	
	def __str__(self):
		return self.block

	def __block__(self):
		return self.block

	class Meta:
		ordering = [ 'block' ]

class OnsiteSchedule(models.Model):
	date = models.DateTimeField()

	def __str__(self):
		return str(self.date)
	class Meta:
		ordering = ['date']

		
class StudentEntry(models.Model):
	identifier = models.CharField(max_length=64, default="12345")
	student = models.ForeignKey(Student, on_delete=models.CASCADE)
	date = models.ForeignKey(OnsiteSchedule, on_delete=models.CASCADE, null=True)

	qr_code = models.URLField(blank=True)
	created_on = models.DateTimeField( auto_now_add=True )
	updated_on = models.DateTimeField(null=True, blank=True)

	def __str__(self):
		return ("%s : %s" % (self.student, self.date))

	def generate_qr_code(self):
		self.identifier = uuid.uuid4()
		link = generate_code(self.identifier)
		self.qr_code = link

	def save(self, *args, **kwargs):
		update_time = datetime.now()
		self.generate_qr_code()

		self.updated_on = update_time
		
		super( StudentEntry, self ).save( *args, **kwargs )
