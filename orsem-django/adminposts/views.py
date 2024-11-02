from django.core.mail import send_mail
from django.db.models import Q
from django.shortcuts import render
from django.utils import timezone

from rest_framework import generics, permissions, renderers, viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from datetime import datetime
from adminposts.models import *

# from adminposts.permissions import *
from adminposts.serializers import *
from rest_framework import status
from django.conf import settings


@api_view(['GET'])
def api_root(request, format=None):
    return Response(
        {
            'posts': reverse('post-list', request=request, format=format),
            'mechandise': reverse('merchandise-list', request=request, format=format),
            'downloadables': reverse(
                'downloadable-list', request=request, format=format
            ),
            'days': reverse('day-list', request=request, format=format),
            'faqs': reverse('faq-list', request=request, format=format),
        }
    )


class PrivacyPolicyViewSet(viewsets.ModelViewSet):
    queryset = PrivacyPolicy.objects.all()
    serializer_class = PrivacyPolicySerializer
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly,
    ]


class DayViewSet(viewsets.ModelViewSet):

    queryset = Day.objects.filter(date__lte=timezone.now().date())
    serializer_class = DaySerializer
    lookup_field = 'day'
    # permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save()

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        # checks if the object staus is empty
        if object.status == "" or object.status is None:
            raise serializers.ValidationError("your error message")
        return super(DayViewSet, self).update(request, *args, **kwargs)


class AllDayView(generics.ListAPIView):
    queryset = Day.objects.all()
    serializer_class = AllDaySerializer
    lookup_field = 'day'
    # permission_classes = [permissions.IsAuthenticated]


class PostViewSet(viewsets.ModelViewSet):

    queryset = Post.objects.filter(
        Q(day_to_publish__date__lt=timezone.now().date())
        | (
            Q(day_to_publish__date=timezone.now().date())
            & Q(time_to_publish__lte=timezone.now().time())
        )
    ).order_by('day_to_publish', 'time_to_publish')
    serializer_class = PostSerializer
    lookup_field = 'slug'
    # permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save()

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        # checks if the object staus is empty
        if object.status == "" or object.status is None:
            raise serializers.ValidationError("your error message")
        return super(PostViewSet, self).update(request, *args, **kwargs)


class MerchandiseViewSet(viewsets.ModelViewSet):

    queryset = Merchandise.objects.all()
    serializer_class = MerchandiseSerializer
    # permission_classes = [permissions.IsAuthenticated]
    lookup_field = 'slug'

    def perform_create(self, serializer):
        serializer.save()


class SponsorViewSet(viewsets.ModelViewSet):

    queryset = Sponsor.objects.all()
    serializer_class = SponsorSerializer
    # permission_classes = [permissions.IsAuthenticated]
    authentication_classes = []
    lookup_field = 'slug'

    def perform_create(self, serializer):
        serializer.save()


class DownloadableViewSet(viewsets.ModelViewSet):

    queryset = Downloadable.objects.all()
    serializer_class = DownloadableSerializer
    # permission_classes = [permissions.IsAuthenticated]
    lookup_field = 'slug'

    def perform_create(self, serializer):
        serializer.save()


class FAQViewSet(viewsets.ModelViewSet):

    queryset = FAQ.objects.all()
    serializer_class = FAQSerializer
    # permission_classes = [permissions.IsAuthenticated]


class MailViewSet(viewsets.ModelViewSet):
    queryset = Mail.objects.all()
    serializer_class = MailSerializer

    def create(self, request, *args, **kwargs):
        serailizer_class = MailSerializer(data=request.data)

        if serailizer_class.is_valid():
            data = serailizer_class.validated_data
            # print( data )
            email_from = data.get('email')
            subject = data.get('subject') + " by " + data.get('name')
            message = "Email: " + data.get('email') + "\n\n" + data.get('message')
            recipient_list = settings.RECIPIENT_LIST

            send_mail(subject, message, email_from, recipient_list, fail_silently=False)

            return Response({"success": "Sent"})

        return Response({'success': "Failed"}, status=status.HTTP_400_BAD_REQUEST)


class AdminVideosViewSet(viewsets.ModelViewSet):

    queryset = AdminVideos.objects.filter(
        Q(day_to_publish__date__lt=timezone.now().date())
        | (
            Q(day_to_publish__date=timezone.now().date())
            & Q(time_to_publish__lte=timezone.now().time())
        )
    ).order_by('day_to_publish', 'time_to_publish')
    serializer_class = AdminVideosSerializer
    lookup_field = 'slug'
    # permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save()

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        # checks if the object staus is empty
        if object.status == "" or object.status is None:
            raise serializers.ValidationError("your error message")
        return super(AdminVideosViewSet, self).update(request, *args, **kwargs)


class YugtoTalkViewSet(viewsets.ModelViewSet):

    queryset = YugtoTalk.objects.filter(
        Q(day_to_publish__date__lt=timezone.now().date())
        | (
            Q(day_to_publish__date=timezone.now().date())
            & Q(time_to_publish__lte=timezone.now().time())
        )
    ).order_by('day_to_publish', 'time_to_publish')
    serializer_class = YugtoTalkSerializer
    lookup_field = 'slug'
    # permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save()

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        # checks if the object staus is empty
        if object.status == "" or object.status is None:
            raise serializers.ValidationError("your error message")
        return super(YugtoTalkViewSet, self).update(request, *args, **kwargs)

