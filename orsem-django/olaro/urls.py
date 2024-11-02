from rest_framework.routers import DefaultRouter
from django.conf.urls import url
from django.urls import path, include

from .views import *

router = DefaultRouter()

router.register(r'games', GamesForTheDayViewSet)


urlpatterns = [
	url( r'^', include(router.urls) ),
]