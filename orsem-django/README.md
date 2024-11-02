# DOCUMENTATION!!!!!!!!!!!!

## please if you change anything actually add anything that could help future devs. thank you. very much. i love you.

# OrSem Website 20xx

## Setup

### Env File

```
SECRET_KEY=
CLOUD_NAME=
CLOUD_API_KEY=
CLOUD_API_SECRET=
EMAIL_HOST_USER=
EMAIL_HOST_PASSWORD=
RECIPIENT_LIST=[]

DJANGO_GOOGLE_OAUTH2_CLIENT_ID = 
DJANGO_GOOGLE_OAUTH2_CLIENT_SECRET = 

DB_NAME=
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_PORT=
```

The database used is **PostgreSQL**.

### Running

*Don't forget to use `orsem.bsettings`.*

`python manage.py makemigrations --settings=orsem.bsettings`
`python manage.py migrate --settings=orsem.bsettings`
`python manage.py runserver --settings=orsem.bsettings`

In case the manage.py wizard doesn't make the migrations for each app, you can do so individually
by doing `python manage.py <app_name>` for each folder in the back end.

### Google OAuth2 Backend

Create an OAuth2.0 client through `console.cloud.google.com`.

1. For authorized origins: put `http://localhost:3000/` and `http://localhost`.
2. For authorized redirect URIs: put `http://localhost:3000/`

Ensure you have your **Client ID** and **Client Secret**.

1. Client ID is formatted as `<text>.apps.googleusercontent.com`.

Create a service account with your details.
In your keys, press *Create new key* and export it as JSON.

Put the generated JSON file in the backend's root directory as `user_credentials.json`.

## Authentication Flow

Previous developers used **Google OAuth2** which is good for streamlining the authentication process
and allowing new freshman to use their brand-new, spanking and sparkling *student.ateneo.edu* email address.

Current implementation only uses OAuth in the **frontend**. I have not tested it myself but the current flow is:

1. Log in with Google from frontend
2. Using the email of the user retrieved through OAuth, it sends in a payload to this back end to `auth/token/obtain`.
3. The payload is `username: username, password: '<something>'`.
4. This means the password is the same for ALL users. *Not very secure...*

Some deprecated code exists in `authentication.serializers` and `authentication.services` which can allow for
a refactoring. We will see if this is feasible still because of time constraints.

`https://medium.com/@rahadianpanjipanji/how-to-django-x-react-authentication-with-google-oauth2-2d9995b7cb91`
