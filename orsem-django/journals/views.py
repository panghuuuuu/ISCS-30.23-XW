from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import Category, Author, Article
from .serializers import CategorySerializer, AuthorSerializer, ArticleSerializer
from .permissions import IsAdminOrReadOnly

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAdminOrReadOnly]  # Allow unrestricted access
    authentication_classes = []

class AuthorViewSet(viewsets.ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
    permission_classes = [IsAdminOrReadOnly]  # Allow unrestricted access
    authentication_classes = []

class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = [IsAdminOrReadOnly]  # Allow unrestricted access
    authentication_classes = []
