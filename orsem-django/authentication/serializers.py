# from django.contrib.auth.models import User, Group
from rest_framework import serializers, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.views import exception_handler
from rest_framework.permissions import IsAuthenticated

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

# from .services import google_validate_id_token, user_get
# from .selectors import user_get_me


# class UserInitApi(APIView):
#     class InputSerializer(serializers.Serializer):
#         email = serializers.EmailField()
#         first_name = serializers.CharField(required=False, default='')
#         last_name = serializers.CharField(required=False, default='')
#
#     def post(self, request, *args, **kwargs):
#         id_token = request.data['idToken']
#         google_validate_id_token(id_token=id_token)
#
#         serializer = self.InputSerializer(data=request.data['data'])
#         serializer.is_valid(raise_exception=True)
#
#         user, _ = user_get(**serializer.validated_data)
#
#         response = Response(data=user_get_me(user=user))
#
#         print(response)
#         return response


class AuthenticatedViewApi(APIView):
    # Handle authentication redirection here
    class UserSerializer(serializers.Serializer):
        email = serializers.EmailField()
        first_name = serializers.CharField(required=False, default='')
        last_name = serializers.CharField(required=False, default='')

    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        return Response({"success": "Sent"}, status=status.HTTP_200_OK)


class AuthSerializer(serializers.Serializer):
    code = serializers.CharField(required=False, default='')
    error = serializers.CharField(required=False, default='')

