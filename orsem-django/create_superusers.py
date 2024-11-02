import os
import django
from django.contrib.auth.models import User

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'orsem.settings')
django.setup()

num_superusers = 10
for i in range(num_superusers):
    username = f'superuser{i}'
    email = f'superuser{i}@example.com'
    password = 'password'
    User.objects.create_superuser(username=username, email=email, password=password)
    print(f'Superuser {username} created')
