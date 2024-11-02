import requests
from typing import Dict, Any

from django.conf import settings
from django.core.exceptions import ValidationError


from django.contrib.auth import get_user_model
from django.shortcuts import redirect
from urllib.parse import urlencode

User = get_user_model()


def google_get_access_token(code: str, redirect_uri: str) -> str:
    data = {
        'code': code,
        'client_id': settings.GOOGLE_OAUTH2_CLIENT_ID,
        'client_secret': settings.GOOGLE_OAUTH2_CLIENT_SECRET,
        'redirect_uri': redirect_uri,
        'grant_type': 'authorization_code',
    }

    response = requests.post(settings.GOOGLE_ACCESS_TOKEN_OBTAIN_URL, data=data)
    if not response.ok:
        raise ValidationError('Could not get access token from Google.')

    print(response.json())
    access_token = response.json()['access_token']

    return access_token


# Get user info from google
def google_get_user_info(access_token: str) -> Dict[str, Any]:
    response = requests.get(
        settings.GOOGLE_USER_INFO_URL, params={'access_token': access_token}
    )

    if not response.ok:
        raise ValidationError('Could not get user info from Google.')

    print(response.json())
    return response.json()


def get_user_data(validated_data):
    domain = settings.BASE_BACK_END_URL
    redirect_uri = f'{domain}/auth/api/login/google/'

    code = validated_data.get('code')
    error = validated_data.get('error')

    if error or not code:
        params = urlencode({'error': error})
        print(params)
        print(code)
        return redirect(f'{settings.BASE_APP_URL}?{params}')

    access_token = google_get_access_token(code=code, redirect_uri=redirect_uri)
    user_data = google_get_user_info(access_token=access_token)

    return user_data
