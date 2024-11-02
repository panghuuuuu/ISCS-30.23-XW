from django.db import models

from cloudinary.models import CloudinaryField

# Create your models here.

class Participant(models.Model):
	name = models.CharField(max_length=255)
	course = models.CharField(max_length=32)
	description = models.TextField()
	image = CloudinaryField('Media', null=True, blank=True)
	video = models.URLField()

	def __str__(self):
		return self.name