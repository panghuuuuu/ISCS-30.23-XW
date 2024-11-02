from django.urls import path, include
from django.conf.urls import url

from rest_framework import renderers
from rest_framework.routers import DefaultRouter

from .views import *

router = DefaultRouter()

router.register(r'participants', ParticipantViewSet)

urlpatterns = [
	url( r'^', include(router.urls) ),
]