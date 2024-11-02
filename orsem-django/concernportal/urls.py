from django.urls import path, include
from django.conf.urls import url
# from . import views
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()

router.register(r'concerns', ConcernViewSet)
router.register(r'user-concerns', UserConcernsViewSet )
urlpatterns = [
    url( r'^', include(router.urls) ),
]