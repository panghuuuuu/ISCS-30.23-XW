from rest_framework import serializers
from .models import *


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name', 'id']


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ['name', 'id']


class ArticleSerializer(serializers.ModelSerializer):
    authors = AuthorSerializer(many=True, read_only=True)
    category = CategorySerializer(read_only=True)  


    class Meta:
        model = Article
        fields = [
            'title',
            'authors',
            'content',
            'article_img',
            'date_published',
            'category',
            'thumbnail_img',
            'thumbnail_url',
            'id',
            'extra_img1',
            'extra_img2',
            'extra_img3',
        ]
