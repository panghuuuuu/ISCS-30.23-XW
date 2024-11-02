from django.contrib.auth.models import User

def user_get_me(*, user: User):
    return {
        'id': user.id,
        'name': user.name,
        'email': user.email
    }