from django.core.mail import send_mail
from django.db import models
from django.utils import timezone
from datetime import datetime
from cloudinary.models import CloudinaryField

import re
import os

POST_ATTACHMENT_TYPE = [
    ('Image', 'Image'),
    ('Facebook', 'Facebook'),
    ('Google', 'Google'),
]

SPONSOR_ATTACHMENT_TYPE = [('Image', 'Image'), ('Video', 'Video')]


def get_upload_path(instance, filename):
    return os.path.join('posts', 'Day ' + str(instance.day_to_publish.day), filename)


class PrivacyPolicy(models.Model):

    link = models.URLField()
    text = models.TextField()


class FAQ(models.Model):

    question = models.CharField(max_length=255)
    answer = models.TextField()

    def __str__(self):
        return self.question

    def __repr__(self):
        return self.question


class Day(models.Model):

    day = models.IntegerField()
    date = models.DateField(default=timezone.now)

    def __str__(self):
        return "Day " + str(self.day)

    def __repr__(self):
        return "Day " + str(self.day)

    class Meta:
        ordering = ['-date']


class Merchandise(models.Model):

    title = models.CharField(max_length=100)
    slug = models.CharField(
        max_length=100,
        unique=True,
        null=True,
        blank=True,
        verbose_name='Slug (optional)',
    )
    description = models.TextField()
    image = CloudinaryField('image')

    def __str__(self):
        return self.title

    def __repr__(self):
        return self.title

    def makeSlug(self):
        return re.sub('[^A-Za-z0-9 ]+', '', self.title).replace(' ', '-').lower()

    def save(self, *args, **kwargs):
        self.slug = self.makeSlug()
        super(Merchandise, self).save(*args, **kwargs)

    class Meta:
        ordering = ['title']


class Downloadable(models.Model):
    title = models.CharField(max_length=50)
    slug = models.CharField(
        unique=True,
        max_length=50,
        null=True,
        blank=True,
        verbose_name='Slug (optional)',
    )
    description = models.TextField()
    is_disabled = models.BooleanField(verbose_name='Is the file disabled?')
    image = CloudinaryField('image')
    link = models.URLField(verbose_name='Link to resource')

    def __str__(self):
        return self.title

    def __repr__(self):
        return self.title

    def makeSlug(self):
        return re.sub('[^A-Za-z0-9 ]+', '', self.title).replace(' ', '-').lower()

    def save(self, *args, **kwargs):
        self.slug = self.makeSlug()
        super(Downloadable, self).save(*args, **kwargs)

    class Meta:
        ordering = ['title']


class Post(models.Model):

    title = models.CharField(max_length=200)
    slug = models.CharField(
        unique=True,
        max_length=200,
        blank=True,
        null=True,
        verbose_name='Slug (optional)',
    )
    post_content = models.TextField(blank=True, null=True)
    post_attachment_type = models.CharField(
        max_length=20, choices=POST_ATTACHMENT_TYPE, null=True, blank=True
    )
    link = models.URLField(verbose_name='Link to video', null=True, blank=True)
    media = CloudinaryField('Media', null=True, blank=True)

    day_to_publish = models.ForeignKey(
        Day, on_delete=models.SET_NULL, null=True, related_name='posts'
    )
    time_to_publish = models.TimeField(
        default=timezone.now, verbose_name='Time to Publish'
    )
    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    def __repr__(self):
        return self.title

    def makeSlug(self):
        return re.sub('[^A-Za-z0-9 ]+', '', self.title).replace(' ', '-').lower()

    def save(self, *args, **kwargs):
        self.slug = self.makeSlug()
        super(Post, self).save(*args, **kwargs)

    class Meta:
        ordering = ['day_to_publish__date', 'time_to_publish', 'id']


class Sponsor(models.Model):
    title = models.CharField(max_length=200)
    slug = models.CharField(
        unique=True,
        max_length=200,
        blank=True,
        null=True,
        verbose_name='Slug (optional)',
    )
    post_content = models.TextField(blank=True, null=True)
    media_1_image = CloudinaryField('Image Media', null=True, blank=True)
    media_2_image = CloudinaryField('Image Media', null=True, blank=True)
    media_3_image = CloudinaryField('Image Media', null=True, blank=True)
    media_4_image = CloudinaryField('Image Media', null=True, blank=True)
    embed_video_link = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.title

    def __repr__(self):
        return self.title

    def makeSlug(self):
        return re.sub('[^A-Za-z0-9 ]+', '', self.title).replace(' ', '-').lower()

    def save(self, *args, **kwargs):
        self.slug = self.makeSlug()
        super(Sponsor, self).save(*args, **kwargs)


class Mail(models.Model):
    """
    This class is responsible for handling all the mails send via Contact Us page.
    """

    name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    subject = models.CharField(max_length=255)
    message = models.TextField()

    def __str__(self):
        return self.subject

    def __repr__(self):
        return self.subject

    # def save(self, *args, **kwargs):
    # 	"""
    # 	Upon creating a new mail, the contents are mailed directly.
    # 	"""
    # 	print(self.email)
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

    # 	super(Mail, self).save( *args, **kwargs )


class YugtoTalk(models.Model):

    title = models.CharField(max_length=200)
    slug = models.CharField(
        unique=True,
        max_length=200,
        blank=True,
        null=True,
        verbose_name='Slug (optional)',
    )
    link = models.URLField(verbose_name='Link to video', null=True, blank=True)

    day_to_publish = models.ForeignKey(
        Day, on_delete=models.SET_NULL, null=True, related_name='yutotalks'
    )
    time_to_publish = models.TimeField(
        default=timezone.now, verbose_name='Time to Publish'
    )
    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    def __repr__(self):
        return self.title

    def makeSlug(self):
        return re.sub('[^A-Za-z0-9 ]+', '', self.title).replace(' ', '-').lower()

    def save(self, *args, **kwargs):
        self.slug = self.makeSlug()
        super(Post, self).save(*args, **kwargs)


class AdminVideos(models.Model):

    title = models.CharField(max_length=200)
    slug = models.CharField(
        unique=True,
        max_length=200,
        blank=True,
        null=True,
        verbose_name='Slug (optional)',
    )
    post_content = models.TextField(blank=True, null=True)
    link = models.URLField(verbose_name='Link to video', null=True, blank=True)
    media = CloudinaryField('Media', null=True, blank=True)

    day_to_publish = models.ForeignKey(
        Day, on_delete=models.SET_NULL, null=True, related_name='adminvideos'
    )
    time_to_publish = models.TimeField(
        default=timezone.now, verbose_name='Time to Publish'
    )
    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    def __repr__(self):
        return self.title

    def makeSlug(self):
        return re.sub('[^A-Za-z0-9 ]+', '', self.title).replace(' ', '-').lower()

    def save(self, *args, **kwargs):
        self.slug = self.makeSlug()
        super(AdminVideos, self).save(*args, **kwargs)
