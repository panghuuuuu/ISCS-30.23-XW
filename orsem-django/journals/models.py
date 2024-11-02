from django.db import models
from cloudinary.models import CloudinaryField
from datetime import date

class Category(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name
	
class Author(models.Model):
	name = models.CharField(max_length=50, unique=True)

	def __str__(self):
		return self.name

class Article(models.Model):
	title = models.CharField(max_length=70)
	authors = models.ManyToManyField(Author, related_name='articles')
	content = models.TextField()
	article_img = CloudinaryField('Article Image Media', null=True, blank=True)
	date_published = models.DateField()
	category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='articles')
	thumbnail_img = CloudinaryField('Thumbnail Image Media', null=True, blank=True) # can either upload url or img for thumbnail
	thumbnail_url = models.URLField(max_length=200, null=True, blank=True)
	extra_img1 = CloudinaryField('Other Image Media 1', null=True, blank=True)
	extra_img2 = CloudinaryField('Other Image Media 2', null=True, blank=True)
	extra_img3 = CloudinaryField('Other Image Media 3', null=True, blank=True)

	def __str__(self):
		return self.title
       
	def get_authors(self):
		return ", ".join([author.name for author in self.authors.all()])
    
	def get_date_published(self):
		return self.date_published
	
	def get_thumbnail(self):
		if self.thumbnail_img:
			return self.thumbnail_img.url
		return self.thumbnail_url
