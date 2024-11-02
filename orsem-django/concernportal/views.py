from cgitb import lookup
from django.shortcuts import render
from django.contrib import messages
from django.contrib.auth.models import User
from .models import *
from blockinfo.models import *

from rest_framework import status
from rest_framework.response import Response

from .serializers import *
from rest_framework import generics, permissions, renderers, viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

# POST function for concern portal form

class ConcernViewSet(viewsets.ModelViewSet):
	lookup_value_regex = r"[\w.@]+"
	queryset = Concern.objects.all().order_by('-created_on')
	serializer_class = FullConcernSerializer
	permission_classes = [permissions.AllowAny]

	def create(self, request, *args, **kwargs):
		student = User.objects.get(username=request.data['user'])

		Concern.objects.create(
			title = request.data['title'],
			message = request.data['message'],
			user = student
		)

		return Response(request.data, status=status.HTTP_201_CREATED)

class UserConcernsViewSet(viewsets.ModelViewSet):
	lookup_value_regex =  r"[\w.@]+"
	queryset = User.objects.all()
	serializer_class = UserConcernsSerializer
	permission_classes = [permissions.IsAuthenticatedOrReadOnly]
	lookup_field = 'username'

	def perform_create(self, serializer):
		serializer.save()

	def update(self, request, *args, **kwargs):
           instance = self.get_object()
           # checks if the object staus is empty
           if object.status == "" or object.status is None :
               raise serializers.ValidationError("your error message")
           return super(UserConcernsViewSet, self).update(request, *args, **kwargs)



# def concernportal(request):
#     submitted = False
#     if request.method == "POST":
#         form = PostForm(request.POST)
#         if form.is_valid():
#             form.save()

#             # Would you guys want this here or is the one in the frontend sufficient
#             # messages.success(request, f'Your concern has been submitted!')

#             #to be edited based on the route
#             return render('/')

#     else:
#         form = PostForm
#         if 'submitted' in request.GET:
#             submitted = True

#     #to be edited based on the route
#     return render(request, '/', {'form': form, 'submitted': submitted })