from django.urls import path, include
from django.conf.urls import url

from rest_framework import renderers
from rest_framework.routers import DefaultRouter
from rest_framework.urlpatterns import format_suffix_patterns

from adminposts.views import *

router = DefaultRouter()

# router.register(r'days', DayViewSet)
# router.register(r'posts', PostViewSet)
# router.register(r'merchandises', MerchandiseViewSet)
# router.register(r'downloadables', DownloadableViewSet)
# router.register(r'faqs', FAQViewSet)
# router.register(r'privacy-policy', PrivacyPolicyViewSet)
router.register(r'sponsors', SponsorViewSet)
# router.register(r'mail', MailView)
# router.register(r'mails', MailViewSet)
# router.register(r'yugto-talks', YugtoTalkViewSet)
# router.register(r'adminvideos', AdminVideosViewSet)
# mail_list = MailViewSet.as_view({
# 	'get': 'list',
# 	'post': 'create'
# 	})

urlpatterns = [
	# url( r'^contact-us/', mail_list, name='mail-list' ),
	url( r'^alldays/', AllDayView.as_view() ),
	url( r'^', include(router.urls) ),
]
