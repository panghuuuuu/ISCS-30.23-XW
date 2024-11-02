from django.urls import include, path
from rest_framework import routers
from rest_framework_simplejwt import views as jwt_views

from . import views, serializers

router = routers.DefaultRouter()


urlpatterns = [
    # path('', serializers.UserInitApi.as_view()),
    path('home/', serializers.AuthenticatedViewApi.as_view()),
    path('api/login/google/', views.GoogleLoginAPI.as_view()),
    path('token/obtain/', jwt_views.TokenObtainPairView.as_view(), name='token_create'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]
