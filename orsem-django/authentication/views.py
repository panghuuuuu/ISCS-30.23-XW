from .serializers import *

from django.conf import settings

from rest_framework import status
from rest_framework.response import Response

from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.tokens import RefreshToken

from .services import get_user_data
from blockinfo.models import Student
from django.shortcuts import redirect
from django.conf import settings
from django.contrib.auth import login, get_user_model
from rest_framework.views import APIView

User = get_user_model()
# from social_django.utils import psa

# Create your views here.

# class UserViewSet(viewsets.ModelViewSet):
#     queryset = User.objects.all().order_by('-date_joined')
#     serializer_class = UserSerializer
#     permission_classes = [permissions.IsAuthenticated]


# class GroupViewSet(viewsets.ModelViewSet):
#     queryset = Group.objects.all()
#     serializer_class = GroupSerializer
#     permission_classes = [permissions.IsAuthenticated]


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = TokenObtainPairSerializer

    def post(self, request, *args, **kwargs):
        print(request.data)

        serializer = serializer_class(data=request.data)

        if serializer.is_valid():
            user = serializer.save()

            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GoogleLoginAPI(APIView):
    def get(self, request):
        auth_serializer = AuthSerializer(data=request.GET)
        auth_serializer.is_valid(raise_exception=True)

        validated_data = auth_serializer.validated_data
        user_data = get_user_data(validated_data)

        if "student.ateneo.edu" not in user_data['email']:
            return redirect(
                f"{settings.BASE_APP_URL}/?error=invalid_email"
            )

        user, created = User.objects.get_or_create(
            email=user_data['email'],
            defaults={
                'username': user_data['email'],
                'first_name': user_data.get('given_name'),
                'last_name': user_data.get('family_name'),
            },
        )

        # Match the student depending on the email
        student = Student.objects.filter(email=user_data['email']).first()
        if student and not student.user:
            student.user = user
            student.save()

        refresh = RefreshToken.for_user(user)
        print(refresh.access_token)

        return redirect(
            f"{settings.BASE_APP_URL}/?access={refresh.access_token}&refresh={refresh}&email={user_data['email']}&id={student}"
        )
