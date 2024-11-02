from django.db import models
from adminposts.models import *

# Create your models here.

class Game(models.Model):
	title = models.CharField(max_length=64)
	points = models.IntegerField()
	day = models.ForeignKey(Day, on_delete=models.CASCADE, related_name="games")
	description = models.TextField()
	participants = models.TextField()

	def __str__(self):
		return self.title
	
	def __repr__(self):
		return self.title