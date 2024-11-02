from django.urls import path, include
from django.conf.urls import url

from rest_framework import renderers
from rest_framework.routers import DefaultRouter
from rest_framework.urlpatterns import format_suffix_patterns

from blockinfo.views import *

router = DefaultRouter()

router.register(r'students', StudentsViewSet)
router.register(r'links', LinksViewSet)
router.register(r'entrants', StudentEntryViewSet)
#router.register(r'scores', BlockScoreViewSet)
# router.register(r'block-info', StudentToLinksViewSet)

urlpatterns = [
	path('id-request/', get_id_via_email, name='get-id-via-email'),
	path('qrscan/', send_data_to_sheets, name='send-data-to-sheets'),
	url( r'^', include(router.urls) ),
]